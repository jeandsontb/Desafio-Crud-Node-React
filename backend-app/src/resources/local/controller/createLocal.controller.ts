import { Request, Response } from "express";
import * as Yup from "yup";

import AppError from "../../../shared/error/AppError";
import CreateCompanyInLocalService from "../services/createLocal.service";

export class CreateLocalController {
  async handle(req: Request, res: Response) {
    const { name, address, companyId } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError("Os campos são obrigatórios", 400);
    }

    const localService = new CreateCompanyInLocalService();

    const local = await localService.create({
      name,
      address,
      companyId,
    });

    return res.status(201).json(local);
  }
}
