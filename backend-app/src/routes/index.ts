import { Router } from "express";

import { companyRouter } from "./company.routes";
import { localRouter } from "./local.routes";
import { responsibleRouter } from "./responsible.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/company", companyRouter);
routes.use("/local", localRouter);
routes.use("/responsible", responsibleRouter);

export default routes;
