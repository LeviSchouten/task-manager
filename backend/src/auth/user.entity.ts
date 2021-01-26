import { Task } from 'src/tasks/task.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  isAdmin: boolean;

  @OneToMany(
    type => Task,
    task => task.createdBy,
    { eager: true },
  )
  createdTasks: Task[];

  @OneToMany(
    type => Task,
    task => task.createdBy,
    { eager: true },
  )
  completedTasks: Task[];
}
