import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';



import { UserCategory } from '../titre/user-category.enum';

@Entity()
export class User {

  @CreateDateColumn()
  created: Date;

  @Column({ type: 'varchar', name: 'email', length: 200 })
  email: string;

  @Column({ type: 'varchar', name: 'first_name', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', name: 'mobile_phone', length: 31 })
  mobilePhone: string;

  @Column({
    type: 'enum',
    name: 'category',
    enum: Object.keys(UserCategory).map(item => UserCategory[item]),
    default: 'Standard',
  })
  category: UserCategory;

  @Column({ type: 'varchar', name: 'password' })
  password: string;

  @UpdateDateColumn()
  updated: Date;
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;
}
