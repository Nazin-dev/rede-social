import './Login.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { loginUser } from '../../services/apiServices.js';

function Login() {

  const navigate = useNavigate(); 
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar a mensagem de erro

  // Função para redirecionar para a página de criação de conta
  function handleCreateAccount() {
    navigate("/create-account"); // Redireciona para a página de criação de conta
  }

  // Função para tratar as mudanças nos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Função para submeter o formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const formData = new FormData();
    formData.append('email', username); // Adiciona o email
    formData.append('password', password); // Adiciona a senha

    try {
      const response = await loginUser(formData); // Chama a API para autenticar o usuário
      if (response === true) {
        navigate("/home"); // Redireciona para a página home se o login for bem-sucedido
      } else {
        setErrorMessage('Email ou senha incorretos.'); // Exibe mensagem de erro se o login falhar
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
      setErrorMessage('Erro no servidor. Tente novamente mais tarde.'); // Mensagem de erro no servidor
    }
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='img-melonzone'>
          <img className='melonzone' src={melonzone} alt="" />
        </div>
        <Input type="email" placeholder="Email" name="username" onChange={handleInputChange}/>
        <Input type="password" placeholder="Senha" name="password" onChange={handleInputChange}/>
        <button type='submit' className='login-button'>Entrar</button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>} {/* Exibe a mensagem de erro */}
        <a href='#' className='recover-password'>Esqueceu a senha?</a>
        <button onClick={handleCreateAccount} type='button' className='creat-account-button'>Criar nova conta</button>
      </form> 
    </div>
  );
}

export default Login;
