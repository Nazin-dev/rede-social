import './Login.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import { useNavigate } from "react-router-dom";




function Login() {

  const navigate = useNavigate(); 
  function handleCreateAccount() {
    navigate("/create-account"); // Redireciona para a página de criação de conta
  }

  function loginToHomePage(e) {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <Input type="email" name="Email" />
        <Input type="password" name="Senha"/>
        <button type='submit' className='login-button' onClick={loginToHomePage} >Entrar</button>
        <a  href='#' className='recover-password'>Esqueceu a senha?</a>
        <button onClick={handleCreateAccount} type='submit' className='creat-account-button'>Criar nova conta</button>
      </form> 
    </div>
  );
};

export default Login;