import { Router } from "express";

import userAuthenticated from "../middlewares/authAuthenticated";
import { CreateCompanyController } from "../resources/company/controller/createCompany.controller";
import { DeleteCompanyController } from "../resources/company/controller/deleteCompany.controller";
import { ShowCompanyController } from "../resources/company/controller/showCompany.controller";
import { ShowOneCompanyController } from "../resources/company/controller/showOneCompany.controler";
import { UpdateCompanyController } from "../resources/company/controller/updateCompany.controller";

const companyRouter = Router();

const createController = new CreateCompanyController();
const updateController = new UpdateCompanyController();
const showController = new ShowCompanyController();
const deleteController = new DeleteCompanyController();
const showOneController = new ShowOneCompanyController();

companyRouter.use(userAuthenticated);

companyRouter.post("/create", createController.handle);
companyRouter.put("/update/:id", updateController.handle);
companyRouter.get("/showone/:id", showOneController.handle);
companyRouter.get("/show", showController.handle);
companyRouter.delete("/delete/:id", deleteController.handle);

export { companyRouter };
