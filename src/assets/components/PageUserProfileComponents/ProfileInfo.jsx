import './ProfileInfo.css';
import './ProfileControlPosts.css';
import UserStats from './UserStats.jsx';
import ControlButtons from './ProfileControlButtons.jsx';
import EditProfileModal from '../PageModalUserComponents/EditProfileModal.jsx';
import React, { useEffect, useState } from 'react';
import PostItem from '../PageHomeComponents/PostItem.jsx';
import { getMyProfile, getUserById } from '../../../services/apiServices.js';

function ProfileInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    userDTO: {},
    posts: [],
  });

  const handleEditProfile = () => {
    setIsModalOpen(true); // Abrir modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fechar modal
  };

  const handleShareProfile = () => {
    console.log("Compartilhar perfil");
  };


  useEffect(() => {
    async function fetchMyProfile() {
      try {
        const response = await getMyProfile();
        setProfile(response);
        console.log(response);
      } catch (error) {
        console.error('Erro ao pegar os posts', error);
      }
    }

    fetchMyProfile(); // Chama a função para buscar os posts
  }, []);
  

  return (
    <>
      {profile.userDTO && profile.posts && (
        <>
          <UserStats
            userId={profile.userDTO.id}
            userProfile={profile.userDTO.img}
            userName={profile.userDTO.username}
            numbersPosts={profile.totalPosts}
            followers={profile.totalFollowers}
            following={profile.totalFollowing}
            userBio={profile.userDTO.bio}
            colorname={profile.userDTO.color}
          />
          <ControlButtons 
            onPrimaryFunction={handleEditProfile}
            primaryText="Editar Perfil"
            secondaryText="Compartilhar Perfil"
          />
          <div className="control-posts">
            <p className="my-posts">Meus Posts</p>
            {profile.posts.map((post) => (
              <PostItem
                userid={profile.userDTO.id}
                key={post.id}
                id={post.id}
                userProfile={profile.userDTO.img}
                userName={profile.userDTO.username}
                userLocation={"Brasil"}
                postText={post.text}
                postImage={post.img ?post.img : null} 
                likes={post.totalLikes}
                likedByUser={post.likedByUser} 
                dateFromApi={post.timestamp}
                colorname={profile.userDTO.color}
              />
            ))}
          </div>
        </>
      )}
      <EditProfileModal user={profile.userDTO} isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  );
}

export default ProfileInfo;