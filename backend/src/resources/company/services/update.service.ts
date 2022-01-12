import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import AppError from "../../../shared/error/AppError";
import { ICompanyData } from "../dtos/company.create";

export default class UpdateCompanyService {
  async update(id: string, data: ICompanyData) {
    const companyRepository = getRepository(Company);

    const companyExists = await companyRepository.findOne({
      where: { id },
    });

    if (!companyExists) {
      throw new AppError(
        "Opss! Infelizmente não foi fossível fazer a alteração",
        401
      );
    }

    companyExists.name = data.name;
    companyExists.description = data.description;
    companyExists.cnpj = data.cnpj;
    companyExists.updatedAt = new Date();

    const companyData = await companyRepository.save(companyExists);

    return companyData;
  }
}
