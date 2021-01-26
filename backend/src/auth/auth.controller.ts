import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtToken } from './interfaces/jwt-token.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async singUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.singUp(authCredentialsDto);
  }

  @Post('signin')
  async singIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<JwtToken> {
    return this.authService.signIn(authCredentialsDto);
  }
}
