import { getRepository } from "typeorm";

import { Responsible } from "../../../entity/Responsible";
import AppError from "../../../shared/error/AppError";

export default class DeleteResponsibleService {
  async delete(id: string) {
    const responsibleRepository = getRepository(Responsible);

    const responsible = await responsibleRepository.findOne({
      where: { companyId: id },
    });

    if (!responsible) {
      throw new AppError("Opss! Não foi possível excluir essa empresa", 401);
    }

    await responsibleRepository.delete({ companyId: id });

    return { success: "sucesso ao deletar" };
  }
}
