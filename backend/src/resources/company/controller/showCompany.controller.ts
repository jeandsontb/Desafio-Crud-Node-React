import { Request, Response } from "express";

import ShowCompanyService from "../services/show.service";

export class ShowCompanyController {
  async handle(req: Request, res: Response) {
    const companyService = new ShowCompanyService();

    const company = await companyService.show();

    return res.status(201).json(company);
  }
}
