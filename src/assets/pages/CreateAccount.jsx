import './CreateAccount.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import CustomFileInput from '../components/PageAuthComponents/CustomFileInput.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateAccount() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  function goToLogin(event) {
    event.preventDefault();
    navigate("/");
  }

  function createAccountToHomePage(e) {
    e.preventDefault();
    if (isChecked) {
      navigate("/home");
    }
    else {
      alert("Você deve concordar com os Termos de Uso e a Política de Privacidade");
    }
  };

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isChecked) {
      alert("Você deve concordar com os Termos de Uso e a Política de Privacidade");
      return;
    }
    // Continue com o processo de cadastro
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='img-melonzone'>
          <img className='melonzone' src={melonzone} alt="Melonzone" />
        </div>
        <CustomFileInput />
        <Input type="text" name="Nome" />
        <Input type="email" name="Email" />
        <Input type="password" name="Senha" />
        
        {/* Checkbox para aceitar os Termos */}
        <div className='terms'>
          <input 
            required 
            type="checkbox" 
            id="terms" 
            onChange={handleCheckboxChange} 
            checked={isChecked} 
          />
          <label htmlFor="terms">
            Eu concordo com os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade</a> da Melonzone.
          </label>
        </div>

        <button type='submit' className='button-create' onClick={createAccountToHomePage}>Cadastrar-se</button>
        <p className='access-account'>
          Já tem uma conta?
          <a href='#' onClick={goToLogin}>Conecte-se</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
