import './EditProfileModal.css';
import Profile from '../../img/profile/profile3.png'

function EditProfileModal({isOpen, onClose}) {
  if (!isOpen) return null;

  return(
    <div className="modal-edit-profile">
      <div className="modal-container">
        <div className="modal-header">
          <div className="close-btn" onClick={onClose}><i class="bi bi-arrow-left"></i></div>
          <div className="title-header">Editar Perfil</div>
        </div>

        <div className="modal-profile-pic">
          <img src={Profile} alt="Profile" className="profile-picture" />
          <div className="edit-pic">Editar foto</div>
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
            <textarea defaultValue="🎓 Estudante de Direito\n🤓 Fan de Harry Potter\n💛 Solteira\n🎂 18 years" />
          </div>

          <div className="input-group">
            <label>Sexo</label>
            <select defaultValue="Masculino">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
        </div>

      </div>
    </div>
  );
};

export default EditProfileModal