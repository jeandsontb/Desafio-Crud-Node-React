import { Router } from "express";

import { companyRouter } from "./company.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/company", companyRouter);

export default routes;
