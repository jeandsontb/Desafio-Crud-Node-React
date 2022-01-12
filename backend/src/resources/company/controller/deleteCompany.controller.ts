import { Request, Response } from "express";

import DeleteCompanyService from "../services/delete.service";

export class DeleteCompanyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const companyService = new DeleteCompanyService();

    const company = await companyService.delete(id);

    return res.status(201).json(company);
  }
}
