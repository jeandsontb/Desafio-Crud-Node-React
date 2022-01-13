import { getRepository } from "typeorm";

import { Local } from "../../../entity/Local";
import AppError from "../../../shared/error/AppError";

export default class DeleteCompanyInLocalService {
  async delete(id: string) {
    const localRepository = getRepository(Local);

    const companyInLocalExists = await localRepository.findOne({
      where: { id },
    });

    if (!companyInLocalExists) {
      throw new AppError("Opss! Não foi possível excluir essa empresa", 401);
    }

    await localRepository.delete({ id });

    return { success: "sucesso ao deletar" };
  }
}
