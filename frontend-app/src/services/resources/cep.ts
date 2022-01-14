import axios from 'axios';

const api = axios.create({
  baseURL: `https://viacep.com.br`
})

const searchCep = async (cep: string) => {
  const response = await api.get(`/ws/${cep}/json/`);
  return response;
}

export { searchCep }