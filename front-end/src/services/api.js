// src/services/api.js
import axios from 'axios';

// Cria uma instância do axios com a URL base do seu back-end
// O Spring Boot, por padrão, roda na porta 8080
const api = axios.create({
  baseURL: 'http://localhost:8080',
  
});

// Função para cadastrar um usuário
// Ela vai fazer um POST pra /usuarios/cadastrar
export const registerUser = (userData) => {
  // userData deve ser um objeto com { nome, email, senha }
  return api.post('/usuarios/cadastrar', userData);
};

// Função para fazer login
// Ela vai fazer um POST pra /auth/login
export const loginUser = (credentials) => {
  // credentials deve ser um objeto com { email, senha }
  return api.post('/auth/login', credentials);
};

export default api;