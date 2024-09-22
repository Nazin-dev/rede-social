import React from 'react';
import CommentItem from './CommentItem.jsx';
import '../PageCommentComponents/CommentFeed.css'

function CommentFeed({ comments = [] }) {
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
    return comments.map(function(comment, index) {
      return (
        <CommentItem
          key={index}
          userProfile={comment.userProfile}
          userName={comment.userName}
          commentText={comment.commentText}
          timeAgo={comment.timeAgo}
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
