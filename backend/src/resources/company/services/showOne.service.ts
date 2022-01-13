import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import { Local } from "../../../entity/Local";
import { Responsible } from "../../../entity/Responsible";
import AppError from "../../../shared/error/AppError";

export default class ShowOneCompanyService {
  async showOne(id: string) {
    const companyRepository = getRepository(Company);
    const localRespository = getRepository(Local);
    const responsibleRespository = getRepository(Responsible);

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

    const companyLocal = await localRespository.find({
      where: { companyId: id },
    });

    const companyResponsible = await responsibleRespository.find({
      where: { companyId: id },
    });

    const dataCompany = {
      companyData,
      companyLocal,
      companyResponsible,
    };

    return dataCompany;
  }
}
