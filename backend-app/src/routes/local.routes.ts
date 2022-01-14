import { Router } from "express";

import userAuthenticated from "../middlewares/authAuthenticated";
import { CreateLocalController } from "../resources/local/controller/createLocal.controller";
import { DeleteLocalController } from "../resources/local/controller/deleteLocal.controller";
import { ShowLocalController } from "../resources/local/controller/showLocal.controller";

const localRouter = Router();
const createController = new CreateLocalController();
const showController = new ShowLocalController();
const deleteController = new DeleteLocalController();

localRouter.use(userAuthenticated);

localRouter.post("/create", createController.handle);
localRouter.get("/show/:id", showController.handle);
localRouter.delete("/delete/:id", deleteController.handle);

export { localRouter };
