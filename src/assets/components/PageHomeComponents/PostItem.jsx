import '../PageHomeComponents/PostItem.css';
import React, { useState } from 'react';
import CommentModal from '../PageCommentComponents/CommentModal.jsx'; // Importa o CommentModal

function PostItem({ userProfile, userName, userLocation, postText, postImage, likes, timeAgo, initialComments }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // Gerencia o estado do modal de comentários

  function LikeClick() {
    setIsLiked(!isLiked);
  }

  function openCommentModal() {
    setIsCommentModalOpen(true);
  }

  function closeCommentModal() {
    setIsCommentModalOpen(false);
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-info">
          <img src={userProfile} alt="" className="profile-pic" />
          <div className="post-info">
            <span className="username">{userName}</span>
            <span className="location">{userLocation}</span>
          </div>
        </div>
        <div className="options-profile"><i className="bi bi-three-dots"></i></div>
      </div>
      <p className="post-text">{postText}</p>
      {postImage && <img src={postImage} alt="Post" className="post-image" />}
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
