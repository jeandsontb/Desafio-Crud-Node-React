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
  createResponsibleLocalAndCompany, 
  deleteCompanyMain, 
  deleteLocalCompany, 
  deleteResponsibleCompany, 
  showCompanys,
  showLocalCompany,
  updateCompanyMain, 
} from '../services/resources/company';

interface ICompanyData {
  company: IShowCompanyDataAll[];
  openForm: boolean;
  companyEdit: ICompanyEdit;
  showAllCompanys: () => void;
  createCompany: (data: ICompanyCreate) => Promise<any>;
  editCompany: (data?: ICompanyEdit) => Promise<any>;
  updateCompany: (data: ICompanyUpdate) => Promise<any>;
  deleteCompany: (id: string) => void;
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
    let idLocalCompanyData = '';

    //verifica se há necesssidade de criar um local e também já adiciona o id para 
    //ser enviado para os responsáveis.
    if(dataUpdate.localCompany) {
      const { data } = await showLocalCompany(dataUpdate.id);
      let vefiryLocalCompany = data.find(
        (local: { address: string | undefined; }) => local.address === dataUpdate.localCompany
      );
      if(vefiryLocalCompany !== undefined) {
        idLocalCompanyData = data[0].id;
      } else {
        const localData = {
          name: dataUpdate.name,
          address: dataUpdate.localCompany,
          companyId: dataUpdate.id
        }
        const responseLocal = await createLocalCompany(localData);
        idLocalCompanyData = responseLocal.data.id;
      }
    }

    //verifica se sem algum id do local, nome e endereço para inserir um novo responsável
    if(idLocalCompanyData !== '' && 
        dataUpdate.nameResponsible && 
          dataUpdate.addressResponsible
    ) {
      const responsibleData = {
        name: dataUpdate.nameResponsible,
        address: dataUpdate.addressResponsible
      }
      await createResponsibleLocalAndCompany(
        dataUpdate.id, idLocalCompanyData, responsibleData
      );
    }
     
    //depois de verificar tudo faz o update da empresa no banco e na lista
    if(dataUpdate.id) {
      const tempCompany = [...company];
      const newCompany = tempCompany.find((obj) => obj.id === dataUpdate.id);
      if(newCompany) {
        newCompany.name = dataUpdate.name;
        newCompany.cnpj = dataUpdate.cnpj;
        newCompany.description = dataUpdate.description;

        await updateCompanyMain(dataUpdate.id, newCompany);
      }
      setCompany(tempCompany);
      openPanelEdit();
      return 'success';
    }
  }

  //Função para deletar uma empresa e seus relacionamentos
  const deleteCompany = async (id: string) => {
    await deleteResponsibleCompany(id);
    await deleteLocalCompany(id);
    await deleteCompanyMain(id);
    showAllCompanys();
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
      deleteCompany,
      openPanelEdit,
      updateCompany
    }}>
      {children}
    </CompanyContext.Provider>
  )
}