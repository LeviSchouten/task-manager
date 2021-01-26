import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  createdById: number;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  completedAt: Date;

  @Column({ nullable: true })
  verifiedAt: Date;

  @Column({ nullable: true })
  completedById: number;

  @ManyToOne(
    type => User,
    user => user.createdTasks,
  )
  createdBy: User;

  @ManyToOne(
    type => User,
    user => user.createdTasks,
  )
  completedBy: User;
}
