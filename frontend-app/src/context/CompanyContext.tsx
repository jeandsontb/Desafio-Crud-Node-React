import { createContext, useState } from 'react';

import { 
  ICompanyCreate, 
  ICompanyEdit, 
  ICompanyShowOne, 
  ICompanyUpdate, 
  ILocalList, 
  IResponsibleList, 
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
  showOneCompanyMain,
  showResponsibleCompany,
  updateCompanyMain, 
} from '../services/resources/company';

interface ICompanyData {
  company: IShowCompanyDataAll[];
  openForm: boolean;
  companyEdit: ICompanyEdit;
  companySelected: ICompanyShowOne;
  showAllCompanys: () => void;
  createCompany: (data: ICompanyCreate) => Promise<any>;
  editCompany: (data?: ICompanyEdit) => Promise<any>;
  updateCompany: (data: ICompanyUpdate) => Promise<any>;
  showOneCompany: (id: string) => void;
  deleteCompany: (id: string) => void;
  openPanelEdit: () => void;
}

export const CompanyContext = createContext<ICompanyData>({} as ICompanyData);

export const CompanyProvider: React.FC = ({children}) => {
  const [ company, setCompany ] = useState<IShowCompanyDataAll[]>([] as IShowCompanyDataAll[]);
  const [ openForm, setOpenForm ] = useState(false);
  const [ companyEdit, setConpanyEdit ] = useState<ICompanyEdit>({} as ICompanyEdit);
  const [ companySelected, setCompanySelected ] = useState<ICompanyShowOne>({} as ICompanyShowOne);

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

  const showOneCompany = async (id: string) => {
    const { data } = await showOneCompanyMain(id);

    let companyLocal: ILocalList[] = [];
    // eslint-disable-next-line array-callback-return
    data.companyLocal.map((res: {id: string; name: string; address: string; }) => {
      const dataLocalOne = {
        id: res.id,
        nameLocal: res.name,
        addressLocal: res.address
      }
      companyLocal.push(dataLocalOne);
    })

    let companyResponsible: IResponsibleList[] = [];
    // eslint-disable-next-line array-callback-return
    data.companyResponsible.map((res: { name: string; address: string; }) => {      
        const dataResponsibleOne = {
          nameResponsible: res.name,
          addressResponsible: res.address
        }
        companyResponsible.push(dataResponsibleOne);
    });

    const dataOneCompanySelected: ICompanyShowOne = {
      id: data.companyData.id,
      name: data.companyData.name,
      cnpj: data.companyData.cnpj,
      description: data.companyData.description,
      companyLocal,
      companyResponsible
    }
    setCompanySelected(dataOneCompanySelected);
  }

  //Função para deletar uma empresa e seus relacionamentos
  const deleteCompany = async (id: string) => {
    const {data: responseResponsible} = await showResponsibleCompany(id);
    if(responseResponsible.length > 0) {
      await deleteResponsibleCompany(id);
    }
    const {data: responseLocal} = await showLocalCompany(id);
    if(responseLocal.length > 0 ) {
      await deleteLocalCompany(id);
    }
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
      companySelected,
      showAllCompanys, 
      createCompany, 
      editCompany,
      showOneCompany,
      deleteCompany,
      openPanelEdit,
      updateCompany
    }}>
      {children}
    </CompanyContext.Provider>
  )
}