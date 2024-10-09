import './ProfileInfo.css';
import UserStats from './UserStats.jsx';
import ControlButtons from './ProfileControlButtons.jsx';
import ControlPosts from './ProfileControlPosts.jsx';
import Profile from '../../img/profile/profile4.png';
import ImagePost from '../../img/posts/post7.png'
import EditProfileModal from '../PageModalUserComponents/EditProfileModal.jsx';
import React, { useState } from 'react';

function ProfileInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfile = () => {
    setIsModalOpen(true); // Abrir modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fechar modal
  };

  const handleShareProfile = () => {
    console.log("Compartilhar perfil");
  };

  return(
    <>
      <UserStats
      userProfile={Profile}
      userName="Nailton Reis"
      numbersPosts="5"
      followers="100"
      following="567"
      userBio="🎓 Estudante de Direito 
               😎 Fan de DBZ
               ❤️ Solteiro
               🎂 18 years"  
      />
      <ControlButtons 
      onPrimaryFunction={handleEditProfile}
      primaryText="Editar Perfil"
      onSecondaryFunction={handleShareProfile}
      secondaryText="Compartilhar Perfil"
      />
      <ControlPosts 
      namePostsHeader="Minhas Postagens"
      userProfile={Profile}
      userName="Senhor Mito" 
      userLocation="Brazil" 
      postText="Tiro neles. HAAHHA, aqui é o mito." 
      postImage={ImagePost} 
      likes="567" 
      timeAgo="9 minutos"
      />
      <EditProfileModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  );
};

export default ProfileInfo;