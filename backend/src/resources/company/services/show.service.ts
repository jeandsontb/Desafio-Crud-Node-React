import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import AppError from "../../../shared/error/AppError";

export default class ShowCompanyService {
  async show() {
    const companyRepository = getRepository(Company);

    const companyExists = await companyRepository.find();

    if (!companyExists) {
      throw new AppError("Opss! Problema ao listar as empresas", 401);
    }

    return companyExists;
  }
}
