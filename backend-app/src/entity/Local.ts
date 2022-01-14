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

@Entity()
export class Local {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  companyId: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
