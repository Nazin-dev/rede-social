import './StylePageRecovery.css';
import melonzone from '../../img/melonzone.png';
import Input from '../../components/PageAuthComponents/Input.jsx';
import { useNavigate } from "react-router-dom";

function NewPassword() {

  const navigate = useNavigate(); 
  function goToLogin() {
    navigate("/"); // Redireciona para o login
  }

  return(

    <div className='recovery-container'>
      <form className='recovery-form'>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <p className='info-user'>Insira aqui a sua nova senha.</p>
        <Input type="text" name="Nova Senha" />
        <button type='submit' className='recovery-button' onClick={goToLogin}>Continuar</button>
        <a href='#' className='back-to-login' onClick={goToLogin}>Voltar para o login?</a>
      </form> 
    </div>

  );
};

export default NewPassword;