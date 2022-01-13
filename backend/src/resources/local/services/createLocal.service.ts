import { getRepository } from "typeorm";

import { Local } from "../../../entity/Local";
import AppError from "../../../shared/error/AppError";
import { ILocalData } from "../dtos/locals.dto";

export default class CreateCompanyInLocalService {
  async create({ name, address, companyId }: ILocalData) {
    const localRepository = getRepository(Local);

    const localExists = await localRepository.findOne({
      where: { companyId },
    });

    if (localExists) {
      throw new AppError("Empresa já foi cadastrada nesse local", 401);
    }

    const local = localRepository.create({
      name,
      address,
      companyId,
    });

    await localRepository.save(local);

    return local;
  }
}
