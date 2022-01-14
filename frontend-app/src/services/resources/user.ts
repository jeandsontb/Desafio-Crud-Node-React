import { IUserSigninData, IUserSignupData } from "../../dtos/user";
import api from "../api";

const signIn = async (data: IUserSigninData) => {
  const result = await api.post('/user/signin', data);
  return result;
} 

const signUp = async (data: IUserSignupData) => {
  const result = await api.post('/user/signup', data);
  return result;
}

const userLogged = async () => {
  return api.get('/user/showuser');
}

export {signIn, signUp, userLogged};