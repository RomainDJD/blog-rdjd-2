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
  @Column({ type: 'boolean', name: 'admin', default: false })
  admin: boolean;

  @Column({ type: 'blob', name: 'avatar', nullable: true })
  avatar: ArrayBuffer;
  
  @CreateDateColumn()
  created: Date;

  @Column({ type: 'varchar', name: 'email', length: 200, default: '' })
  email: string;

  @Column({ type: 'varchar', name: 'first_name', length: 100, default: '' })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 100, default: '' })
  lastName: string;

  @Column({ type: 'varchar', name: 'mobile_phone', length: 31, default: '' })
  mobilePhone: string;

  @Column({
    type: 'enum',
    name: 'category',
    enum: Object.keys(UserCategory).map(item => UserCategory[item]),
    default: 'Standard',
  })
  category: UserCategory;

  @Column({ type: 'varchar', name: 'password', default: ''})
  password: string;

  @UpdateDateColumn()
  updated: Date;
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: string;
  
}
