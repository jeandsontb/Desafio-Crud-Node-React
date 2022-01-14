import { Request, Response } from "express";
import * as Yup from "yup";

import AppError from "../../../shared/error/AppError";
import CreateCompanyService from "../services/create.service";

export class CreateCompanyController {
  async handle(req: Request, res: Response) {
    const { name, cnpj, description } = req.body;
    const { id } = req.user;

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

    const companyService = new CreateCompanyService();

    const company = await companyService.create({
      name,
      cnpj,
      description,
      userId: id,
    });

    return res.status(201).json(company);
  }
}
