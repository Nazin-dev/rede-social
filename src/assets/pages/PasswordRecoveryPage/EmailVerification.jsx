import './StylePageRecovery.css';
import melonzone from '../../img/melonzone.png';
import Input from '../../components/PageAuthComponents/Input.jsx';
import { useNavigate } from "react-router-dom";

function PasswordRecovery() {

  const navigate = useNavigate(); 
  function goToLogin() {
    navigate("/"); // Redireciona para a página de criação de conta
  }

  function recoverPassword(e) {
    e.preventDefault();
    navigate("/verification-code"); // Redireciona para a página de verificação de código
  };

  return(

    <div className='recovery-container'>
      <form className='recovery-form'>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <p className='info-user'>Insira seu e-mail aqui e enviaremos um código de recuperação.</p>
        <Input type="email" name="Email" />
        <button type='submit' className='recovery-button' onClick={recoverPassword}>Continuar</button>
        <a href='#' className='back-to-login' onClick={goToLogin}>Voltar para o login?</a>
      </form> 
    </div>

  );
};

export default PasswordRecovery;