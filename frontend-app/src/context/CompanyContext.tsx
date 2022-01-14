import { createContext, useState } from 'react';

import { ICompanyCreate, IShowCompanyDataAll } from '../dtos/company';
import { createCompanyMain, showCompanys } from '../services/resources/company';

// interface IContextData {
//   user: IUserData;
//   userSignIn: (userData: IUserSigninData) => Promise<IUserData>;
//   userSignUp: (userData: IUserSignupData) => Promise<IUserData>;
//   getUserLogged: () => Promise<IUserData>;
// }

interface ICompanyData {
  company: IShowCompanyDataAll[];
  openForm: boolean;
  showAllCompanys: () => void;
  createCompany: (data: ICompanyCreate) => Promise<any>;
  editCompany: (id?: string) => Promise<any>;
  openPanelEdit: () => void;
}

export const CompanyContext = createContext<ICompanyData>({} as ICompanyData);

export const CompanyProvider: React.FC = ({children}) => {
  const [ company, setCompany ] = useState<IShowCompanyDataAll[]>([] as IShowCompanyDataAll[]);
  const [ openForm, setOpenForm ] = useState(false);

  const showAllCompanys = async () => {
    const { data } = await showCompanys();
    if(!data) {
      return {error: 'sem empresas na lista'};
    }    
    setCompany(data);
    return;
  }

  const createCompany = async (obj: ICompanyCreate) => {
    const { data } = await createCompanyMain(obj);
    if(!data.id) {
      return 'não foi possível salvar a empresa';
    }
    setCompany([...company, data]);
    return 'success';
  }

  const editCompany = async (id?: string) => {
    openPanelEdit();
  }

  const openPanelEdit = () => {
    setOpenForm(!openForm);
  }

  return (
    <CompanyContext.Provider value={{
      company, 
      openForm,
      showAllCompanys, 
      createCompany, 
      editCompany,
      openPanelEdit
    }}>
      {children}
    </CompanyContext.Provider>
  )
}