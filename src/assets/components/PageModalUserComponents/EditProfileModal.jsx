import './EditProfileModal.css';
import Profile from '../../img/profile/profile3.png';
import { useState } from 'react';

function EditProfileModal({isOpen, onClose}) {
  const [profileImage, setProfileImage] = useState(Profile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return(
    <div className="modal-edit-profile">
      <div className="modal-container">
        <div className="modal-header">
          <div className="close-btn" onClick={onClose}><i class="bi bi-arrow-left"></i></div>
          <div className="title-header">Editar Perfil</div>
        </div>

        <form className="edit-profile-form">
          <div className="modal-profile-pic">
            <img src={profileImage} alt="Profile" className="profile-picture" />
            <label className="edit-pic" htmlFor="profileImageInput">Editar foto</label>
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
            <input type="text" defaultValue="Katia Wentraib" />
          </div>

          <div className="input-group">
            <label>Nome de Usuário</label>
            <input type="text" defaultValue="katxy" />
          </div>

          <div className="input-group">
            <label>Bio</label>
            <textarea defaultValue="🎓 Estudante de Direito
🤓 Fan de Harry Potter
💛 Solteira
🎂 18 years" />
          </div>

          <div className="input-group">
            <label>Sexo</label>
            <select defaultValue="Masculino">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div className="submit-btn-container">
            <button type='submit' className='button-save-changes'>Salvar Alterações</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal