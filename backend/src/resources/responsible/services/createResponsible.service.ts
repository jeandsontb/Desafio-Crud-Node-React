import { getRepository } from "typeorm";

import { Responsible } from "../../../entity/Responsible";
import AppError from "../../../shared/error/AppError";
import { IResponsibleData } from "../dtos/responsible.dto";

export default class CreateResponsibleService {
  async create({
    name,
    address,
    companyId = null,
    localId = null,
  }: IResponsibleData) {
    const responsibleRepository = getRepository(Responsible);

    const responsibleExists = await responsibleRepository.findOne({
      where: { name },
    });

    if (responsibleExists) {
      throw new AppError("Responsável já cadastrado.", 401);
    }

    const responsible = responsibleRepository.create({
      name,
      address,
      companyId,
      localId,
    });

    await responsibleRepository.save(responsible);

    return responsible;
  }
}
