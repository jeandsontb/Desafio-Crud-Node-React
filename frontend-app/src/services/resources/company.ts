import { ICompanyCreate } from "../../dtos/company";
import api from "../api";

const showCompanys = async () => {
  const response = await api.get('/company/show');
  return response;
}

const createCompanyMain = async (data: ICompanyCreate) => {
  const response = await api.post('/company/create', data);
  return response;
}

export { showCompanys, createCompanyMain }