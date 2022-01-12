import { Request, Response } from "express";

import ShowOneCompanyService from "../services/showOne.service";

export class ShowOneCompanyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const companyService = new ShowOneCompanyService();

    const company = await companyService.showOne(id);

    return res.status(201).json(company);
  }
}
