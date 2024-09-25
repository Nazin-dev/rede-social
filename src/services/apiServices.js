import axios from 'axios';

// Configuração inicial do axios para reutilizar em todas as requisições
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // URL base do seu back-end
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo padrão
  },
});

// Interceptor para lidar com erros (opcional, mas útil para lidar com autenticação, logs, etc.)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Lida com erros globais aqui (ex: expiração de token)
    return Promise.reject(error);
  }
);

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post', error);
    throw error;
  }
};


export default getPosts;