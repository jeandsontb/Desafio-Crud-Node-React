import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import AppError from "../../../shared/error/AppError";
import { ICompanyData } from "../dtos/company.create";

export default class CreateCompanyService {
  async create({ name, cnpj, description, userId }: ICompanyData) {
    const companyRepository = getRepository(Company);

    const companyExists = await companyRepository.findOne({ where: { cnpj } });

    if (companyExists) {
      throw new AppError("Empresa já foi cadastrada no sistema", 401);
    }

    const company = companyRepository.create({
      name,
      cnpj,
      description,
      userId,
    });

    await companyRepository.save(company);

    return company;
  }
}
