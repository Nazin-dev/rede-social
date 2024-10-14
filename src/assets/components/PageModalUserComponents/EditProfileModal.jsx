import './EditProfileModal.css';
import { useState, useEffect } from 'react';
import { API_URL_IMAGE, updateUserProfile } from '../../../services/apiServices'; // updateUserProfile: função para enviar os dados à API
import CustomSelect from './CustomSelect.jsx';

function EditProfileModal({ isOpen, onClose, user }) {

  // Estado para os campos de perfil
  const [profileImage, setProfileImage] = useState(API_URL_IMAGE + user.img);
  const [newProfileImage, setNewProfileImage] = useState(null); // Para armazenar a nova imagem a ser enviada
  const [profile, setProfile] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
    color: user.color,
  });

  useEffect(() => {
    // Atualiza o estado inicial sempre que o modal for aberto
    setProfile({
      name: user.fullName,
      username: user.username,
      bio: user.bio,
      color: user.color,
    });
    setProfileImage(API_URL_IMAGE + user.img);
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
      setNewProfileImage(file); // Atualiza o arquivo de imagem
    }
  };

  // Atualiza o estado do perfil conforme os campos são alterados
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleColorChange = (color) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      color: color,
    }));
  };

  // Função para submeter as alterações para a API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria um FormData para enviar os dados, incluindo a imagem
    const formData = new FormData();
    formData.append('fullName', profile.name);
    formData.append('username', profile.username);
    formData.append('bio', profile.bio);
    formData.append('color', profile.color);

    if (newProfileImage) {
      formData.append('file', newProfileImage);
    }

    try {
      await updateUserProfile(formData);
      alert('Perfil atualizado com sucesso!');
      onClose(); // Fecha o modal
      window.location.reload(); // Recarrega a página para exibir as alterações
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Ocorreu um erro ao tentar salvar as alterações.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-edit-profile">
      <div className="modal-container">
        <div className="modal-header">
          <div className="close-btn" onClick={onClose}>
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="title-header">Editar Perfil</div>
        </div>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="modal-profile-pic">
            <img src={profileImage} alt="Profile" className="profile-picture" />
            <label className="edit-pic" htmlFor="profileImageInput">
              Editar foto
            </label>
            <input
              type="file"
              id="profileImageInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>

          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label>Nome de Usuário</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profile.bio ?? 'Nada por enquanto...'}
              onChange={handleInputChange}
            />
          </div>

          <CustomSelect defaultValue={profile.color} onChange={handleColorChange} />

          <div className="submit-btn-container">
            <button type="submit" className="button-save-changes">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
