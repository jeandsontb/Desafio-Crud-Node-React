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

const deleteCompanyMain = async (id: string) => {
  const response = await api.delete(`/company/delete/${id}`);
  return response;
}

const showOneCompanyMain = async (id: string) => {
  const response = await api.get(`/company/showone/${id}`);
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

const showResponsibleCompany = async (id: string) => {
  const response = await api.get(`/responsible/show?companyId=${id}`);
  return response;
}

const showResponsibleLocal = async (id: string) => {
  const response = await api.get(`/responsible/show?localId=${id}`);
  return response;
}

const deleteLocalCompany = async (id: string) => {
  const response = await api.delete(`/local/delete/${id}`);
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

const deleteResponsibleCompany = async (id: string) => {
  const response = await api.delete(`/responsible/delete/${id}`);
  return response;
}

export { 
  showCompanys, 
  createCompanyMain, 
  deleteCompanyMain,
  createLocalCompany, 
  updateCompanyMain,
  showOneCompanyMain,
  showLocalCompany,
  showResponsibleCompany,
  showResponsibleLocal,
  deleteLocalCompany,
  createResponsibleLocalAndCompany,
  deleteResponsibleCompany 
}