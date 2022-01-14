import { getRepository } from "typeorm";

import { Company } from "../../../entity/Company";
import AppError from "../../../shared/error/AppError";

export default class DeleteCompanyService {
  async delete(id: string) {
    const companyRepository = getRepository(Company);

    const companyExists = await companyRepository.findOne({
      where: { id },
    });

    if (!companyExists) {
      throw new AppError("Opss! Não foi possível excluir essa empresa", 401);
    }

    await companyRepository.delete({ id });

    return { success: "sucesso ao deletar" };
  }
}
