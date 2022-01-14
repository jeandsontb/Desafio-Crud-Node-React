import api from "../api";

const showCompanys = async () => {
  const response = await api.get('/company/show');
  return response;
}

export { showCompanys }