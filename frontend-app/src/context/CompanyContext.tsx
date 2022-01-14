import { createContext, useState } from 'react';

import { IShowCompanyDataAll } from '../dtos/company';
import { showCompanys } from '../services/resources/company';

// interface IContextData {
//   user: IUserData;
//   userSignIn: (userData: IUserSigninData) => Promise<IUserData>;
//   userSignUp: (userData: IUserSignupData) => Promise<IUserData>;
//   getUserLogged: () => Promise<IUserData>;
// }

interface ICompanyData {
  company: IShowCompanyDataAll[];
  showAllCompanys: () => void;
}

export const CompanyContext = createContext<ICompanyData>({} as ICompanyData);

export const CompanyProvider: React.FC = ({children}) => {
  const [ company, setCompany ] = useState<IShowCompanyDataAll[]>([] as IShowCompanyDataAll[]);

  const showAllCompanys = async () => {
    const { data } = await showCompanys();
    if(!data) {
      return {error: 'sem empresas na lista'};
    }    
    setCompany(data);
    return;
  }

  return (
    <CompanyContext.Provider value={{company, showAllCompanys}}>
      {children}
    </CompanyContext.Provider>
  )
}