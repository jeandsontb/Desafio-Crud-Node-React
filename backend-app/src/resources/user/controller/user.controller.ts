import { Request, Response } from "express";
import * as Yup from "yup";

import AppError from "../../../shared/error/AppError";
import { UserService } from "../services/user.service";

export class UserController {
  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(3),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError("Todos os campos são obrigatórios", 400);
    }

    const userService = new UserService();

    const user = await userService.signIn({ email, password });

    return res.status(200).json(user);
  }

  async signUp(req: Request, res: Response) {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(3),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError("Todos os campos são obrigatórios", 400);
    }

    const userService = new UserService();

    const user = await userService.signUp(req.body);

    return res.status(200).json(user);
  }

  async showUserLogged(request: Request, response: Response) {
    const userService = new UserService();
    const user = await userService.showUser(request.user);
    return response.status(201).send(user);
  }
}
