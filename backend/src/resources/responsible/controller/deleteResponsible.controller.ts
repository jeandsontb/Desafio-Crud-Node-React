import { Request, Response } from "express";

import DeleteResponsibleService from "../services/deleteResponsible.service";

export class DeleteResponsibleController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const responsibleService = new DeleteResponsibleService();

    const local = await responsibleService.delete(id);

    return res.status(201).json(local);
  }
}
