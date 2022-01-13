import { Request, Response } from "express";
import * as Yup from "yup";

import AppError from "../../../shared/error/AppError";
import CreateResponsibleService from "../services/createResponsible.service";

export class CreateResponsibleController {
  async handle(req: Request, res: Response) {
    const { name, address } = req.body;
    const { companyId, localId } = req.query;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError("Os campos são obrigatórios", 400);
    }

    const responsibleService = new CreateResponsibleService();

    const local = await responsibleService.create({
      name,
      address,
      companyId,
      localId,
    });

    return res.status(201).json(local);
  }
}
