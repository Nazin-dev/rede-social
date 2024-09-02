import './Login.css';
import melonzone from '../img/melonzone.png'

function Login() {
  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <input type='email' className="input-login" placeholder="Email"/>
        <input type='password' className="input-login" placeholder="Senha"/>
        <button type='submit' className='login-button'>Entrar</button>
        <a  href='#' className='recover-password'>Esqueceu a senha?</a>
        <button type='submit' className='creat-account-button'>Criar nova conta</button>
      </form> 
    </div>
  );
};

export default Login;