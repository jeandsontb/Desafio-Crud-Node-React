import { ICompanyCreate, ILocalCreate, IResponsibleCreate } from "../../dtos/company";
import api from "../api";

const showCompanys = async () => {
  const response = await api.get('/company/show');
  return response;
}

const createCompanyMain = async (data: ICompanyCreate) => {
  const response = await api.post('/company/create', data);
  return response;
}

const updateCompanyMain = async (id: string, data: ICompanyCreate) => {
  const response = await api.put(`/company/update/${id}`, data);
  return response;
}

const createLocalCompany = async (data: ILocalCreate) => {
  const response = await api.post('/local/create', data);
  return response;
}

const showLocalCompany = async (id: string) => {
  const response = await api.get(`/local/show/${id}`);
  return response;
}

const createResponsibleLocalAndCompany = async (
  idCompany: string, idLocal: string, data: IResponsibleCreate
) => {
  const response = await api.post(
    `/responsible/create?companyId=${idCompany}&localId=${idLocal}`, data
  );
  return response;
}

export { 
  showCompanys, 
  createCompanyMain, 
  createLocalCompany, 
  updateCompanyMain,
  showLocalCompany,
  createResponsibleLocalAndCompany 
}