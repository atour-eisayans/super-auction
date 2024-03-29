import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'varchar', name: 'first_name', nullable: true })
  firstName?: string;

  @Column({ type: 'varchar', name: 'last_name', nullable: true })
  lastName?: string;

  @Column({ type: 'varchar', name: 'avatar', nullable: true })
  avatar?: string;

  @Column({ type: 'varchar', name: 'username' })
  username!: string;

  @Column({ type: 'varchar', name: 'email', nullable: true })
  email?: string;

  @Column({ type: 'varchar', name: 'phone', nullable: true })
  phone?: string;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  updatedAt!: Date;
}
