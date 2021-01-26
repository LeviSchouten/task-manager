import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtToken } from './interfaces/jwt-token.interface';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password, isAdmin } = authCredentialsDto;

    const user = new User();
    user.salt = await bcrypt.genSalt();
    user.username = username;
    user.isAdmin = isAdmin || false;
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if (!user) {
      throw new NotFoundException(`User with username "${username}" not found`);
    }

    if (user.password !== (await bcrypt.hash(password, user.salt))) {
      throw new UnauthorizedException('Incorrect password');
    }

    return user;
  }
}
