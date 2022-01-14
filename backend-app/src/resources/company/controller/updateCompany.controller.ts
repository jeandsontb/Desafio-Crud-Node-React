import { Request, Response } from "express";
import * as Yup from "yup";

import AppError from "../../../shared/error/AppError";
import UpdateCompanyService from "../services/update.service";

export class UpdateCompanyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, cnpj, description } = req.body;
    const userId = req.user;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError(
        "Os campos (Empresa, CNPJ e Descrição) são obrigatórios",
        400
      );
    }

    const companyService = new UpdateCompanyService();

    const company = await companyService.update(id, {
      name,
      cnpj,
      description,
      userId: userId.id,
    });

    return res.status(201).json(company);
  }
}
