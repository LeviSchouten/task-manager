import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(user: User): Promise<Task[]> {
    const query = this.createQueryBuilder('task');
    query.where('task.createdById = :id', { id: user.id });

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { templateId } = createTaskDto;

    const task = new Task();
    task.createdBy = user;
    task.createdById = user.id;
    task.createdAt = new Date();
    task.save();
    delete task.createdAt;
    return task;
  }
}
