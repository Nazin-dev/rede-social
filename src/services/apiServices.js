import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.API_URL || 'http://localhost:8080/api/v1'

// Configuração inicial do axios para reutilizar em todas as requisições
const api = axios.create({
  baseURL: 'https://api.melonzone.com.br/api/v1', // URL base do seu back-end
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo padrão
  },
});

// Definindo rotas que não requerem autenticação
const NO_AUTH_ROUTES = [
  '/user/login',
  '/user/create',
];

// Interceptor para adicionar token a todas as requisições que precisam de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Caso o token esteja expirado (erro 401)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Evitar loop infinito de retries
      try {
        const refreshToken = sessionStorage.getItem('refreshToken');
        const response = await api.post('/user/refresh-token', { refreshToken });
        const newToken = response.data.token;

        // Atualiza o token no sessionStorage e localStorage
        sessionStorage.setItem('token', newToken);
        localStorage.setItem('token', newToken);

        // Se a API retornar um novo refresh token, atualize também
        if (response.data.refreshToken) {
          sessionStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }

        // Atualiza o cabeçalho Authorization e refaz a requisição original
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Erro ao atualizar o token:', refreshError);
        // Redirecionar para a tela de login caso o refresh falhe
        const navigate = useNavigate();
        navigate('/login');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function getTokens() {
  const token = sessionStorage.getItem('token');
  const refreshToken = sessionStorage.getItem('refreshToken');
  return [token, refreshToken ];
}

// Função para buscar posts (precisa de autenticação)
export async function getPosts() {
  try {
    const response = await api.get('/post/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts', error);
    throw error;
  }
}

// Função para criar post (precisa de autenticação)
export const createPost = async (postData) => {
  try {
    const response = await api.post('/post/create', postData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post', error);
    throw error;
  }
};

// Função para criar usuário (não precisa de autenticação)
export async function createUser(userData) {
  try {
    const response = await api.post('/user/create', userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Função para login (não precisa de autenticação)
export async function loginUser(userData) {
  try {
    const response = await api.post('/user/login', userData);

    // Armazena o token e o refresh token no sessionStorage e localStorage
    sessionStorage.setItem('token', response.data.token);
    sessionStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.status; // Retorne a resposta da API
  } catch (error) {
    console.error('Erro ao logar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export async function getUserById(id) {

  const [token, refreshToken] = getTokens();

  try {
    const response = await api.get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default { getPosts, createPost, createUser, loginUser };
