import '../PageHomeComponents/PostItem.css';
import React, { useState, useEffect } from 'react';
import CommentModal from '../PageCommentComponents/CommentModal.jsx';
import { useNavigate } from "react-router-dom";
import { formateTimeAgo, API_URL_IMAGE, likePost } from '../../../services/apiServices.js';

function PostItem({ id, userid, userProfile, userName, userLocation, postText, postImage, likes, dateFromApi, likedByUser, colorname = "#fff" }) {
  // Estado para controlar se o post está curtido ou não e o número de likes
  const [isLiked, setIsLiked] = useState(likedByUser);
  const [likeCount, setLikeCount] = useState(likes);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // Gerencia o estado do modal de comentários

  const navigate = useNavigate();

  useEffect(() => {
    // Inicializa o estado `isLiked` com base no valor de `likedByUser`
    setIsLiked(likedByUser);
  }, [likedByUser]);

  function navigateUserOther() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verifica se o id é o mesmo do localStorage
    if (userid === storedUser.id) {
      navigate("/user-profile");
    } else {
      navigate(`/user-other/${userid}`);
    }
  }

  // Função chamada quando o botão de like é clicado
  async function LikeClick() {
    try {
      // Faz a requisição para curtir/descurtir o post
      const response = await likePost(id);

      // Atualiza o estado `isLiked` e `likeCount` com base na resposta da API
      if (response !== undefined) {
        setIsLiked(response);
        setLikeCount(prevCount => response ? prevCount + 1 : prevCount - 1);
      }
    } catch (error) {
      console.error("Erro ao dar like/deslike no post:", error);
    }
  }

  function openCommentModal() {
    setIsCommentModalOpen(true);
  }

  function closeCommentModal() {
    setIsCommentModalOpen(false);
  }

  const displayPostImage = postImage ? API_URL_IMAGE + postImage : false;

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-info" onClick={navigateUserOther}>
          <img src={API_URL_IMAGE + userProfile} alt="" className="profile-pic" />
          <div className="post-info">
            <span className="username" style={{color: colorname}}>{userName}</span>
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
        <span className="likes">{likeCount} likes</span>
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
