import { Request, Response } from "express";

import ShowLocalService from "../services/showLocal.service";

export class ShowOneCompanyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const localService = new ShowLocalService();

    const locals = await localService.show(id);

    return res.status(201).json(locals);
  }
}
