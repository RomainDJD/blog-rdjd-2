import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @Column({ type: 'boolean', name: 'admin', default: false })
  admin: boolean;

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

  @Column({ type: 'varchar', name: 'password', default: '' })
  password: string;

  @UpdateDateColumn()
  updated: Date;
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: string;
  
}
