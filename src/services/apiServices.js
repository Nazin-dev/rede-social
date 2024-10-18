import axios from 'axios';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
axios.defaults.withCredentials = true;

const API_URL = 'https://api.melonzone.com.br/api/v1';
export const API_URL_IMAGE = 'https://api.melonzone.com';

// Configuração inicial do axios para reutilizar em todas as requisições
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Lista de URLs que não necessitam de autenticação
const NO_AUTH_ROUTES = [
  '/user/login',
  '/user/create',
  '/user/refresh-token',
];

// Função para obter os tokens
function getTokens() {
  return {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
}

// Função para salvar tokens
function saveTokens(token, refreshToken) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
}

// Interceptor para adicionar o token a todas as requisições que precisam de autenticação
api.interceptors.request.use(
  (config) => {
    const { token } = getTokens();
    // Verifica se a URL atual não está na lista de URLs que não precisam de autenticação
    if (token && !NO_AUTH_ROUTES.includes(config.url)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para lidar com erros globais, como expiração de token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Verifica se houve erro de autenticação e que a requisição não foi para o refresh token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !NO_AUTH_ROUTES.includes(originalRequest.url)
    ) {
      originalRequest._retry = true;
      try {
        const { refreshToken } = getTokens();
        if (refreshToken) {
          // Faz a solicitação para obter um novo token usando o refresh token
          const response = await api.post('/user/refresh-token', null, {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          });
          const newToken = response.data.token;

          // Atualiza os tokens no armazenamento
          saveTokens(newToken, response.data.refreshToken || refreshToken);

          // Garante que o user seja persistido
          const user = response.data.user || JSON.parse(localStorage.getItem('user'));
          localStorage.setItem('user', JSON.stringify(user));

          // Atualiza o cabeçalho Authorization e refaz a requisição original
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

          console.log('Token atualizado, tá funcionando essa miseria');
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Erro ao atualizar o token:', refreshError);
        // Redirecionar para a tela de login caso o refresh falhe
        //window.location.href = '/logout';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Função para buscar posts (precisa de autenticação)
export async function getPosts() {
  try {
    const response = await api.get('/post/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}

// Função para criar post (precisa de autenticação)
export const createPost = async (postData) => {
  try {
    const response = await api.post('/post/create', postData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post:', error);
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
    const { token, refreshToken, user } = response.data;

    // Armazena o token e o refresh token
    saveTokens(token, refreshToken);
    localStorage.setItem('user', JSON.stringify(user));

    return response.status;
  } catch (error) {
    console.error('Erro ao logar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Função para buscar usuário por ID (precisa de autenticação)
export async function getUserById(id) {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function helloworld(){
  try {
    const response = await api.get(`/helloworld`);
    return response.data;
  } catch (error) {
    console.error('Erro', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function getMyProfile() {
  try {
    const response = await api.get(`/user/my-profile`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function getComments(postId) {
  try {
    const response = await api.get(`post/comments/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar comentários:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function createComment(postId, commentData) {
  try {
    const response = await api.post(`post/comment/${postId}`, commentData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar comentário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export function formateTimeAgo(dateFromApi){
  const date = parseISO(dateFromApi);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true, locale: pt });
  return timeAgo;
}

export async function searchUsers(username) {
  try {
    const response = await api.get(`user/search?username=${username}`);
    return response.data;  // Retorna a lista de usuários encontrados
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}

export async function followUser(userId) {
  try {
    const response = await api.post(`user/follow/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao seguir usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function likePost(postId) {
  try {
    const response = await api.post(`post/like/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao curtir post:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function followOrUnfollowUser(userId) {
  try {
    const response = await api.post(`user/follow/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao seguir/deixar de seguir usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function updateUserProfile(formData) {
  try {
    const response = await api.put(`user/edit`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    throw error;
  }
}

export async function followesOfUserID(iduser) {
  try {
    const response = await api.get(`user/followers/${iduser}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar seguidores:', error);
    throw error;
  }
}

export async function followingOfUserID(iduser) {
  try {
    const response = await api.get(`user/following/${iduser}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar seguindo:', error);
    throw error;
  }
}


export default { getPosts, createPost, createUser, loginUser, getUserById, helloworld, getMyProfile, getComments, searchUsers, formateTimeAgo, API_URL_IMAGE, followUser, likePost, followOrUnfollowUser, updateUserProfile, createComment, followesOfUserID, followingOfUserID };
