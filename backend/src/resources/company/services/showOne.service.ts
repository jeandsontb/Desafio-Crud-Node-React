import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import AppError from "../../../shared/error/AppError";

export default class ShowOneCompanyService {
  async showOne(id: string) {
    const companyRepository = getRepository(Company);

    const companyExists = await companyRepository.findOne({
      where: { id },
    });

    if (!companyExists) {
      throw new AppError(
        "Opss! Infelizmente não foi possível listar essa empresa",
        401
      );
    }

    const companyData = await companyRepository.findOne({ id });

    return companyData;
  }
}
