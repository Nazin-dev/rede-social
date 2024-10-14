import React from 'react';
import CommentItem from './CommentItem.jsx';
import '../PageCommentComponents/CommentFeed.css'
import { formateTimeAgo, API_URL_IMAGE } from '../../../services/apiServices.js';

function CommentFeed({ comments }) {
  // Verifica se há comentários, se não houver, exibe uma mensagem padrão
  if (comments.length === 0) {
    return (
      <div className="no-comment">
        <p>Nenhum comentário disponível.</p>
      </div>
  );
  }


  // Função para renderizar os comentários
  function renderComments() {
  return comments.map( (comment) => {
      return (
        <CommentItem
          key={comment.id}
          userProfile={comment.userProfile}
          userName={API_URL_IMAGE + comment.user.img}
          commentText={comment.content}
          timeAgo={formateTimeAgo(comment.timestamp)}
        />
      );
    });
  }

  return (
    <div className="comment-feed">
      {renderComments()} {/* Chama a função que renderiza os comentários */}
    </div>
  );
}

export default CommentFeed;
