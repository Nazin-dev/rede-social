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


export async function getPosts() {
  try {
    const response = await api.get('/post/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('/post/create', postData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post', error);
    throw error;
  }
};

export async function createUser(userData) {
  try {
    const response = await api.post('/user/create', userData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    return response.data;

  } catch (error) {
    console.error('Erro ao criar usuário:', error.response ? error.response.data : error.message);
    throw error; // Rejeita o erro para ser tratado pelo chamador
  }
}

export async function loginUser(userData) {
  try {
    const response = await api.post('/user/login', userData); // Use await para esperar 

    // Armazena o token e o refresh token no sessionStorage
    sessionStorage.setItem('token', response.data.token);
    sessionStorage.setItem('refreshToken', response.data.refreshToken);

    // Armazena os mesmos dados no localStorage para manter a persistência após fechar o navegador
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));


    return response.status; // Retorne a resposta da API
  } catch (error) {
    console.error('Erro ao logar usuário:', error.response ? error.response.data : error.message);
    throw error; // Lança o erro para ser tratado no front-end
  }
}

export default { getPosts, createPost, createUser, loginUser }; 