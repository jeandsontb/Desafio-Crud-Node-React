import { Request, Response } from "express";

import DeleteLocalService from "../services/deleteLocal.service";

export class DeleteLocalController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const localService = new DeleteLocalService();

    const local = await localService.delete(id);

    return res.status(201).json(local);
  }
}
