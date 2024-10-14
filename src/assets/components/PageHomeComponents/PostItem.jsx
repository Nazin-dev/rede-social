import '../PageHomeComponents/PostItem.css';
import React, { useState } from 'react';
import CommentModal from '../PageCommentComponents/CommentModal.jsx';
import { useNavigate } from "react-router-dom";
import { formateTimeAgo, API_URL_IMAGE } from '../../../services/apiServices.js';


function PostItem({ id, userid, userProfile, userName, userLocation, postText, postImage, likes, dateFromApi, likedByUser}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // Gerencia o estado do modal de comentários
  const navigate = useNavigate();

  function navigateUserOther() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verifica se o id é o mesmo do localStorage
    if (userid === storedUser.id) {
      navigate("/user-profile");
    } else {
      navigate(`/user-other/${userid}`);
    }
  }

  function LikeClick() {
    setIsLiked(!isLiked);
  }

  function openCommentModal() {
    setIsCommentModalOpen(true);
  }

  function closeCommentModal() {
    setIsCommentModalOpen(false);
  }

  if (likedByUser) {
    setIsLiked(true);
  }

  const displayPostImage = postImage ? API_URL_IMAGE + postImage : false;

  console.log(`Post item ${id}`);

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-info" onClick={navigateUserOther}>
          <img src={API_URL_IMAGE + userProfile} alt="" className="profile-pic" />
          <div className="post-info">
            <span className="username">{userName}</span>
            <span className="location">{userLocation}</span>
          </div>
        </div>
        <div className="options-profile"><i className="bi bi-three-dots"></i></div>
      </div>
      <p className="post-text">{postText}</p>
      {displayPostImage && <img src={API_URL_IMAGE + postImage} alt="Post" className="post-image" />}
      <div className="icons-post">
        <div className="icon like" onClick={LikeClick}>
          <i className={`bi ${isLiked ? 'bi-heart-fill liked' : 'bi-heart'}`}></i>
        </div>
        <div className="icon comments" onClick={openCommentModal}>
          <i className="bi bi-chat"></i>
        </div>
        <div className="icon send-post"><i className="bi bi-send"></i></div>
      </div>
      <div className="post-footer">
        <span className="likes">{likes} likes</span>
        <span className="time-ago">{formateTimeAgo(dateFromApi)}</span>
      </div>

      {/* Renderiza o CommentModal quando o ícone de comentários é clicado */}
      <CommentModal
        isOpen={isCommentModalOpen}
        closeModal={closeCommentModal}
        idpost={id}
      />

    </div>
  );
};

export default PostItem;
