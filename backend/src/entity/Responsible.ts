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

  @Column({ nullable: true })
  companyId: string;

  @Column({ nullable: true })
  localId: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @ManyToOne(() => Local)
  @JoinColumn({ name: "localId" })
  local: Local;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
