import axios from 'axios';
import { decoratorStorage } from '../decorators';

const api = axios.create({
  baseURL: `http://localhost:3333`
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem(decoratorStorage.token) || '';
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }
  return config
})

export default api;