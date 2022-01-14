import { Router } from "express";

import userAuthenticated from "../middlewares/authAuthenticated";
import { UserController } from "../resources/user/controller/user.controller";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signin", userController.signIn);
userRouter.post("/signup", userController.signUp);
userRouter.get("/showuser", userAuthenticated, userController.showUserLogged);

export { userRouter };
