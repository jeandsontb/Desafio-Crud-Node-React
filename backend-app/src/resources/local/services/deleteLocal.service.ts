import { getRepository } from "typeorm";

import { Local } from "../../../entity/Local";
import AppError from "../../../shared/error/AppError";

export default class DeleteLocalService {
  async delete(id: string) {
    const localRepository = getRepository(Local);

    const localExists = await localRepository.findOne({
      where: { companyId: id },
    });

    if (!localExists) {
      throw new AppError("Opss! Não foi possível excluir esse endereço", 401);
    }

    await localRepository.delete({ companyId: id });

    return { success: "sucesso ao deletar" };
  }
}
