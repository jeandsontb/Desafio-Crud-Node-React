export interface IUserData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
}


export interface IUserSigninData {
  email: string;
  password: string;
}

export interface IUserSignupData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}