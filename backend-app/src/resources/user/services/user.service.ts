import md5 from "crypto-js/md5";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";

import authConfig from "../../../config/auth";
import { User } from "../../../entity/User";
import AppError from "../../../shared/error/AppError";
import { IUserSignIn } from "../dtos/user.signin.dto";
import { IUserSignUp } from "../dtos/user.signup.dto";

export class UserService {
  async signIn(user: IUserSignIn) {
    const userRepository = getRepository(User);

    const { email, password } = user;
    const passwordHash = md5(password).toString();

    const existUser = await userRepository.findOne({
      where: { email, password: passwordHash },
    });

    if (!existUser) {
      throw new AppError("Usuário não encontrado", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        firstName: existUser.firstName,
        lastName: existUser.lastName,
        email: existUser.email,
        phone: existUser.phone,
      },
      secret,
      {
        subject: existUser.id,
        expiresIn,
      }
    );

    delete existUser.password;

    return { accessToken: token };
  }

  async signUp(user: IUserSignUp) {
    const userRepository = getRepository(User);

    const existUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (existUser) {
      throw new AppError("E-mail já está cadastrado em nosso servidor ", 401);
    }

    const userData = {
      ...user,
      password: md5(user.password).toString(),
    };

    const userCreate = await userRepository.save(userData);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      },
      secret,
      {
        subject: userCreate.id,
        expiresIn,
      }
    );

    return { accessToken: token };
  }

  async showUser(user: Partial<User>) {
    const userRepository = getRepository(User);
    const currentUser = await userRepository.findOne({
      where: { id: user.id },
    });

    if (!currentUser) {
      throw new AppError("Usuário não encontrado", 401);
    }
    delete currentUser.password;

    return currentUser;
  }
}
