import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
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

  @Column()
  companyIdRes: string;

  @Column()
  localIdRes: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "companyIdRes" })
  company: Company;

  @ManyToOne(() => Local)
  @JoinColumn({ name: "localIdRes" })
  local: Local;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
