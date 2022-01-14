import { Router } from "express";

import userAuthenticated from "../middlewares/authAuthenticated";
import { CreateResponsibleController } from "../resources/responsible/controller/createResponsible.controller";
import { DeleteResponsibleController } from "../resources/responsible/controller/deleteResponsible.controller";
import { ShowResponsibleController } from "../resources/responsible/controller/showResponsible.controller";

const responsibleRouter = Router();

const createController = new CreateResponsibleController();
const deleteController = new DeleteResponsibleController();
const showController = new ShowResponsibleController();

responsibleRouter.use(userAuthenticated);

responsibleRouter.post("/create", createController.handle);
responsibleRouter.delete("/delete/:id", deleteController.handle);
responsibleRouter.get("/show", showController.handle);

export { responsibleRouter };
