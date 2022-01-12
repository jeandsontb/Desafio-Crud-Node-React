import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  Column,
} from "typeorm";

import { Local } from "./Local";
import { Responsible } from "./Responsible";
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

  @OneToMany(() => Local, (company) => Company)
  @JoinColumn()
  locals: Local[];

  @OneToMany(() => Responsible, (company) => Company)
  @JoinColumn()
  responsibles: Responsible[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
