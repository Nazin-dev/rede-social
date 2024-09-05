import './CreateAccount.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/Input.jsx';
import CustomFileInput from '../components/CustomFileInput.jsx';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {

  const navigate = useNavigate()

  function goToLogin(event) {
    event.preventDefault();
    navigate("/")
  }

  return (
    <div className='container'>
      <form className='form'>
        <div className='img-melonzone'>
        <img className='melonzone' src={melonzone} alt="" />
        </div>
        <CustomFileInput />
        <Input type="text" name="Nome" />
        <Input type="email" name="Email" />
        <Input type="password" name="Senha"/>
        <button type='submit' className='button'>Cadastrar-se</button>
        <p className='access-account' >Já tem uma conta?<a href='#' onClick={goToLogin} >Conecte-se</a></p>
      </form> 
    </div>
  );
};

export default CreateAccount;