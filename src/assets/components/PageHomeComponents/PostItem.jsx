import '../PageHomeComponents/PostItem.css';
import React, { useState } from 'react';
import CommentModal from '../PageCommentComponents/CommentModal.jsx'; 
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';

const urlimagem = "http://localhost:8080";

function PostItem({ userProfile, userName, userLocation, postText, postImage, likes, dateFromApi, initialComments, likedByUser }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // Gerencia o estado do modal de comentários
  const navigate = useNavigate();

  function navigateUserOther() {
    navigate("/user-other")
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

  if(likedByUser){
    setIsLiked(true);
  }

  if(postImage === null){
    postImage = false;
  }

  //formatar a data para quanto tempo atrás foi postado
  const date = parseISO(dateFromApi);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true, locale: pt });

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-info" onClick={navigateUserOther}>
          <img src={urlimagem + userProfile} alt="" className="profile-pic" />
          <div className="post-info">
            <span className="username">{userName}</span>
            <span className="location">{userLocation}</span>
          </div>
        </div>
        <div className="options-profile"><i className="bi bi-three-dots"></i></div>
      </div>
      <p className="post-text">{postText}</p>
      {postImage && <img src={urlimagem + postImage} alt="Post" className="post-image" />}
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
        <span className="time-ago">{timeAgo}</span>
      </div>

      {/* Renderiza o CommentModal quando o ícone de comentários é clicado */}
      <CommentModal
      isOpen={isCommentModalOpen}
      closeModal={closeCommentModal}
      initialComments={Array.isArray(initialComments) ? initialComments : []} // Garante que seja sempre um array
/>

    </div>
  );
};

export default PostItem;
