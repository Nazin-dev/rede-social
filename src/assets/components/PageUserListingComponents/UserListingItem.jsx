import './UserListingStyle.css';
import { useState } from 'react';
import { followOrUnfollowUser } from '../../../services/apiServices';
import { useNavigate } from 'react-router-dom';

function UserListingItem({ id, userProfile, userName, fullName, btnName = "Seguir de volta", btnType }) {
  // Pega o ID do usuário logado do localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const currentUserId = storedUser ? storedUser.id : null;
  const navigate = useNavigate();

  function navigateUserOther() {
    // Verifica se o id é o mesmo do localStorage
    if (id === currentUserId) {
      navigate("/user-profile");
    } else {
      navigate(`/user-other/${id}`);
    }
  }

  // Define o estado inicial de seguimento com base no botão inicial que foi passado
  const [isFollowing, setIsFollowing] = useState(btnName !== "Seguir de volta");
  const [buttonText, setButtonText] = useState(btnName);

  const buttonClass = isFollowing ? "btn-action-grey" : "btn-action-blue";

  // Função para lidar com o clique do botão
  const handleButtonClick = async (e) => {
    e.stopPropagation(); // Impede que o evento de clique do botão propague para o item de usuário
    try {
      // Chama a API para seguir/desseguir
      const response = await followOrUnfollowUser(id);

      // Atualiza o estado com base na resposta da API
      if (response === true) {
        setIsFollowing(true);
        setButtonText("Deixar de seguir");
      } else if (response === false) {
        setIsFollowing(false);
        setButtonText("Seguir de volta");
      }
    } catch (error) {
      console.error('Erro ao seguir/desseguir o usuário:', error);
    }
  };

  return (
    <div className="user-listing-item" onClick={navigateUserOther}>
      <div className="user-listing-details">
        <div className="user-listing-space">
          <div className="user-listing-img">
            <img src={userProfile} alt="" className="user-listing-pic" />
          </div>

          <div className="user-listing-content">
            <div className="user-listing-name-time">
              <span className="user-listing-name">{userName}</span>
            </div>
            <div className="user-listing-text">
              <span className="user-listing-notification">{fullName}</span>
            </div>
          </div>
        </div>
      </div>
      {id !== currentUserId && (
        <div className="user-listing-follow-btn">
          <button className={buttonClass} onClick={handleButtonClick}>{buttonText}</button>
        </div>
      )}
    </div>
  );
}

export default UserListingItem;
