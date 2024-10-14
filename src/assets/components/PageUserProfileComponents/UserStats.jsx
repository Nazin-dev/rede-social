import UserListingModal from '../PageUserListingComponents/UserListingModal';
import '../PageUserProfileComponents/UserStats.css';
import React, { useState } from 'react';
import { API_URL_IMAGE } from '../../../services/apiServices';

// Essa é parte superio do perfil de usuario onde se encontra, seguidores, postagens e seguindo.
function UserStats({ userId, userProfile, userName, followers, following, numbersPosts, userBio, colorname }) {

  const [isUserListingModalOpen, setUserListingModalOpen] = useState(false);
  const [isFollowingListingModalOpen, setFollowingListingModalOpen] = useState(false);

  function openUserListingModal() {
    setUserListingModalOpen(true);
  }

  function closeUserListingModal() {
    setUserListingModalOpen(false);
  }

  function openFollowingListingModal() {
    setFollowingListingModalOpen(true);
  }

  function closeFollowingListingModal() {
    setFollowingListingModalOpen(false);
  }

  return(
    <>
      <div className="content-stats">
        <div className="profile-pic-name">
          <img src={API_URL_IMAGE + userProfile} alt="" className="profile-pic-user" />
          <span className="name-user" style={{color: colorname}}>{userName}</span>
        </div>
        <div className="stats posts-profile">
          <span className="numbers-posts">{numbersPosts}</span>
          <p className="p-posts">Postagens</p>
        </div>
        <div className="stats followers" onClick={openUserListingModal}>
          <span className="numbers-followers">{followers}</span>
          <p className="p-followers">Seguidores</p>
        </div>
        <div className="stats following" onClick={openFollowingListingModal}>
          <span className="numbers-following">{following}</span>
          <p className="p-following">Seguindo</p>
        </div>
      </div>
      <div className='profile-bio'>
        <span className='user-bio'>{userBio}</span>
      </div>
      <UserListingModal 
      id={userId}
      isOpen={isUserListingModalOpen}
      closeModal={closeUserListingModal}
      NameText="Seguidores"
      />
      <UserListingModal
      id={userId}
      isOpen={isFollowingListingModalOpen}
      closeModal={closeFollowingListingModal}
      NameText="Seguindo"
      />
    </>
  );
};

export default UserStats;