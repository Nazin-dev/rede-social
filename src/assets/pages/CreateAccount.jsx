import { useState } from 'react';
import './CreateAccount.css';
import melonzone from '../img/melonzone.png';
import Input from '../components/PageAuthComponents/Input.jsx';
import CustomFileInput from '../components/PageAuthComponents/CustomFileInput.jsx';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/apiServices.js';

function CreateAccount() {

  const navigate = useNavigate();

  function goToLogin(event) {
    event.preventDefault();
    navigate("/");
  }

  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função que lida com a mudança no input de arquivo
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Armazena o arquivo selecionado
  };

  // Função que lida com a mudança nos inputs de texto
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Função para enviar os dados do formulário para o back-end
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    // Cria um objeto FormData para enviar os dados do formulário
    const formData = new FormData();
    formData.append('file', file); // Adiciona a imagem
    formData.append('name', name); // Adiciona o nome
    formData.append('email', email); // Adiciona o email
    formData.append('password', password); // Adiciona a senha
  
    // Envia os dados para o back-end
    try {
      const response = await createUser(formData);
      console.log('Usuário criado com sucesso:', response);
      navigate('/home'); // Redireciona
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='img-melonzone'>
          <img className='melonzone' src={melonzone} alt="" />
        </div>
        <CustomFileInput onChange={handleFileChange} />
        <Input type="text" name="name" placeholder="Nome" onChange={handleInputChange} /> {/* Corrigi o name aqui */}
        <Input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} /> {/* Corrigi o name aqui */}
        <Input type="password" name="password" placeholder="Senha" onChange={handleInputChange} /> {/* Corrigi o name aqui */}
        <button type='submit' className='button'>Cadastrar-se</button>
        <p className='access-account'>Já tem uma conta? <a href='#' onClick={goToLogin}>Conecte-se</a></p>
      </form>
    </div>
  );
}

export default CreateAccount;
