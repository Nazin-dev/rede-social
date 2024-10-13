import './ProfileInfo.css';
import UserStats from './UserStats.jsx';
import ControlButtons from './ProfileControlButtons.jsx';
import ControlPosts from './ProfileControlPosts.jsx';
import Profile from '../../img/profile/profile4.png';
import ImagePost from '../../img/posts/post7.png'
import EditProfileModal from '../PageModalUserComponents/EditProfileModal.jsx';
import React, { useState } from 'react';
import PostItem from '../PageHomeComponents/PostItem.jsx';
import { getMyProfile, getUserById } from '../../../services/apiServices.js';
import { useEffect } from 'react';

function ProfileInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Profile, setProfile] = useState({
    userDTO: {},
    posts: [],
  });

  const urlimagem = "http://localhost:8080";

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
      {Profile.userDTO && Profile.posts && (
        <>
          <UserStats
            userProfile={urlimagem + Profile.userDTO.img}
            userName={Profile.userDTO.name}
            numbersPosts={Profile.totalPosts}
            followers={Profile.totalFollowers}
            following={Profile.totalFollowing}
            userBio={Profile.userDTO.bio}  
          />
          <ControlButtons 
            onPrimaryFunction={handleEditProfile}
            primaryText="Editar Perfil"
            secondaryText="Compartilhar Perfil"
          />
          <div className="control-posts">
            <p className="my-posts">Meus Posts</p>
            {Profile.posts.map((post) => (
              <PostItem
                key={post.id}
                userProfile={Profile.userDTO.img}
                userName={Profile.userDTO.name}
                userLocation={"No mundo da Lua"}
                postText={post.text}
                postImage={post.img ?post.img : null} 
                likes={post.totalLikes}
                likedByUser={post.likedByUser} 
                dateFromApi={post.timestamp}
              />
            ))}
          </div>
        </>
      )}
      <EditProfileModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  );
}

export default ProfileInfo;