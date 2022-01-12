import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from "typeorm";

import { Company } from "./Company";
import { Local } from "./Local";

@Entity()
export class Responsible {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Company, (responsibles) => Responsible)
  @JoinColumn()
  company: Company;

  @ManyToOne(() => Local, (responsibles) => Responsible)
  local: Local;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
