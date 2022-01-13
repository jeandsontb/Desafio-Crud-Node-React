import { Request, Response } from "express";

import ShowResponsibleService from "../services/showResponsible.service";

export class ShowResponsibleController {
  async handle(req: Request, res: Response) {
    const { companyId, localId } = req.query;

    const localService = new ShowResponsibleService();

    const locals = await localService.show(companyId, localId);

    return res.status(201).json(locals);
  }
}
