import './CreateAccount.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import CustomFileInput from '../components/PageAuthComponents/CustomFileInput.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../services/apiServices.js';

function CreateAccount() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("")
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToLogin(event) {
    event.preventDefault();
    navigate("/");
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const validatePassword = (e) => {
    if (e.length >= 8) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isChecked) {
      alert("Você deve concordar com os Termos de Uso e a Política de Privacidade");
      return;
    }

    if (!isPasswordValid) {
      alert("A senha deve ter pelo menos 8 caracteres");
      return;
    }

    // Cria um objeto FormData para enviar os dados do formulário
    const formData = new FormData();
    formData.append('file', file); // Adiciona a imagem
    formData.append('fullName', fullName); // Adiciona o nome
    formData.append('username', username); // Adiciona o nome de usuário
    formData.append('email', email); // Adiciona o email
    formData.append('password', password); // Adiciona a senha
  
    // Envia os dados para o back-end
    try {
      const response = await createUser(formData);
      console.log('Usuário criado com sucesso:', response);
      navigate('/'); // Redireciona
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  // Função que lida com a mudança nos inputs de texto
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'password') {
      setPassword(value);
      validatePassword(event.target.value);
    }
  };

  const handleFileChange = (e) => {
    const value = e.target.files[0]
    setFile(value)
    setFileName(value.name)
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='img-melonzone'>
          <img className='melonzone' src={melonzone} alt="Melonzone" />
        </div>
        <CustomFileInput fileName={fileName} onChange={handleFileChange}/>
        <Input type="text" name="username" placeholder="Nome Usuário" onChange={handleInputChange} />
        <Input type="text" name="fullName" placeholder="Nome Completo" onChange={handleInputChange}/>
        <Input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <Input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        
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

        <button type='submit' className='button-create'>Cadastrar-se</button>
        <p className='access-account'>
          Já tem uma conta?
          <a href='#' onClick={goToLogin}>Conecte-se</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
