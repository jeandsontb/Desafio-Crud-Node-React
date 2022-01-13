import { getRepository } from "typeorm";

import { Local } from "../../../entity/Local";
import AppError from "../../../shared/error/AppError";
import { ILocalData } from "../dtos/locals.dto";

export default class CreateCompanyInLocalService {
  async create({ name, address, companyId }: ILocalData) {
    const localRepository = getRepository(Local);

    const companyInLocalExists = await localRepository.findOne({
      where: { address },
    });

    if (companyInLocalExists) {
      throw new AppError("Empresa já foi cadastrada nesse local", 401);
    }

    const companyInLocal = localRepository.create({
      name,
      address,
      companyId,
    });

    await localRepository.save(companyInLocal);

    return companyInLocal;
  }
}
