import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from "typeorm";

import { Company } from "./Company";
import { Responsible } from "./Responsible";

@Entity()
export class Local {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Company, (locals) => Local)
  @JoinColumn()
  company: Company;

  @OneToMany(() => Responsible, (local) => Local)
  @JoinColumn()
  responsibles: Responsible[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
