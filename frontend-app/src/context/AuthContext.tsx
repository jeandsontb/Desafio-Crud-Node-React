import { createContext, useState } from 'react';
import { decoratorStorage } from '../decorators';
import { IUserData, IUserSigninData, IUserSignupData } from '../dtos/user';

import { signIn, signUp, userLogged } from '../services/resources/user';

interface IContextData {
  user: IUserData;
  userSignIn: (userData: IUserSigninData) => Promise<IUserData>;
  userSignUp: (userData: IUserSignupData) => Promise<IUserData>;
  getUserLogged: () => Promise<IUserData>;
}

export const AuthContext = createContext<IContextData>({} as IContextData);

export const AuthProvider: React.FC = ({children}) => {

  const [ user, setUser ] = useState<IUserData>(() => {
    const user = localStorage.getItem(decoratorStorage.user);

    if(user) {
      return JSON.parse(user);
    }

    return {} as IUserData;
  });


  const userSignIn = async (userData: IUserSigninData) => {

    const { data } = await signIn(userData);

    if(data?.status === 'error') {
      return data;
    }
    if(data.accessToken) {
      localStorage.setItem(decoratorStorage.token, data.accessToken);
    }
    return await getUserLogged();
  }

  const userSignUp = async (userData: IUserSignupData) => {

    const { data } = await signUp(userData);

    if(data.accessToken) {
      localStorage.setItem(decoratorStorage.token, data.accessToken);
    }
    return getUserLogged();
  }

  const getUserLogged = async () => {
    
    const { data } = await userLogged();

    setUser(data);
    localStorage.setItem(decoratorStorage.user, JSON.stringify(data));
    return data as IUserData;
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getUserLogged}}>
      {children}
    </AuthContext.Provider>
  )
}