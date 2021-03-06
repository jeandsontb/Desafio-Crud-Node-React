import { getRepository } from "typeorm";

import { Responsible } from "../../../entity/Responsible";
import AppError from "../../../shared/error/AppError";

export default class ShowResponsibleService {
  // eslint-disable-next-line consistent-return
  async show(idCompany = null, idlocal = null) {
    const localRepository = getRepository(Responsible);

    if (idCompany) {
      const companyResponse = await localRepository.find({
        where: { companyId: idCompany },
      });

      if (!companyResponse) {
        throw new AppError("Opss! Problema ao listar as empresas", 401);
      }

      return companyResponse;
    }

    if (idlocal) {
      const localResponse = await localRepository.find({
        where: { localId: idlocal },
      });

      if (!localResponse) {
        throw new AppError("Opss! Problema ao listar as empresas", 401);
      }

      return localResponse;
    }
  }
}
