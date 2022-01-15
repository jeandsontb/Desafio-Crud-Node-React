import { createContext, useState } from 'react';

import { 
  ICompanyCreate, 
  ICompanyEdit, 
  ICompanyUpdate, 
  IShowCompanyDataAll 
} from '../dtos/company';
import { 
  createCompanyMain, 
  createLocalCompany, 
  showCompanys, 
} from '../services/resources/company';

interface ICompanyData {
  company: IShowCompanyDataAll[];
  openForm: boolean;
  companyEdit: ICompanyEdit;
  showAllCompanys: () => void;
  createCompany: (data: ICompanyCreate) => Promise<any>;
  editCompany: (data?: ICompanyEdit) => Promise<any>;
  updateCompany: (data: ICompanyUpdate) => void;
  openPanelEdit: () => void;
}

export const CompanyContext = createContext<ICompanyData>({} as ICompanyData);

export const CompanyProvider: React.FC = ({children}) => {
  const [ company, setCompany ] = useState<IShowCompanyDataAll[]>([] as IShowCompanyDataAll[]);
  const [ openForm, setOpenForm ] = useState(false);
  const [ companyEdit, setConpanyEdit ] = useState<ICompanyEdit>({} as ICompanyEdit);

  //função para listar todas as empresas cadastradas
  const showAllCompanys = async () => {
    const { data } = await showCompanys();
    if(!data) {
      return {error: 'sem empresas na lista'};
    }    
    setCompany(data);
    return;
  }

  //Função para criar uma empresa nova
  const createCompany = async (obj: ICompanyCreate) => {
    const { data } = await createCompanyMain(obj);
    if(!data.id) {
      return 'não foi possível salvar a empresa';
    }
    setCompany([...company, data]);
    return 'success';
  }

  //Função para atualizar a Empresa e também gravar local e responsável
  const updateCompany = async (dataUpdate: ICompanyUpdate) => {
    if(dataUpdate.localCompany) {
      const localData = {
        name: dataUpdate.name,
        address: dataUpdate.localCompany,
        companyId: dataUpdate.id
      }
      await createLocalCompany(localData);
    }



    //falta a implementação para atualizar a empresa e ainda criar também o responsável
  }

  //Função para abrir o form com a empresa preenchida
  const editCompany = async (data?: ICompanyEdit) => {
    if(data) {
      setConpanyEdit(data);
      openPanelEdit();
      return;
    }
    openPanelEdit();
    return;
  }

  //Função apenas para estender o formulário
  const openPanelEdit = () => {
    setOpenForm(!openForm);
  }

  return (
    <CompanyContext.Provider value={{
      company, 
      openForm,
      companyEdit,
      showAllCompanys, 
      createCompany, 
      editCompany,
      openPanelEdit,
      updateCompany
    }}>
      {children}
    </CompanyContext.Provider>
  )
}