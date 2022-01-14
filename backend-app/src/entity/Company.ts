import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  Column,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  description: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
