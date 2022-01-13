import { Request, Response } from "express";

import DeleteCompanyInLocalService from "../services/deleteLocal.service";

export class DeleteCompanyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const localService = new DeleteCompanyInLocalService();

    const local = await localService.delete(id);

    return res.status(201).json(local);
  }
}
