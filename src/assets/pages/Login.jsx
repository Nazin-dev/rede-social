import './Login.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../services/apiServices.js';


function Login() {

  const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleCreateAccount() {
    navigate("/create-account"); // Redireciona para a página de criação de conta
  }

  function goPasswordRecovery() {
    navigate("/email-recovery")
  }

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

    const userData = {
      email: username,
      password: password,
    };

    try {
      const response = await loginUser(userData); // Chama a API para autenticar o usuário
      console.log('Usuário logado:', response);
      navigate('/home'); // Redireciona para a página de home
    } catch (error) {
      console.error('Erro ao logar:', error);
      setErrorMessage('Erro no servidor. Tente novamente mais tarde.'); // Mensagem de erro no servidor
    }
  };


  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <Input type="email" placeholder="Email" name="username" onChange={handleInputChange} />
        <Input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type='submit' className='login-button' >Entrar</button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <a  href='#' className='recover-password' onClick={goPasswordRecovery}>Esqueceu a senha?</a>
        <button onClick={handleCreateAccount} type='submit' className='creat-account-button'>Criar nova conta</button>
      </form> 
    </div>
  );
};

export default Login;