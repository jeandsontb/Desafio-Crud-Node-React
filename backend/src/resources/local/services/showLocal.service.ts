import { getRepository } from "typeorm";

import { Local } from "../../../entity/Local";
import AppError from "../../../shared/error/AppError";

export default class ShowLocalService {
  async show(id: string) {
    const localRepository = getRepository(Local);

    const local = await localRepository.find({ where: { companyId: id } });

    if (!local) {
      throw new AppError("Opss! Problema ao listar as empresas", 401);
    }

    return local;
  }
}
