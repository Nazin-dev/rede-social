import React, { useState } from 'react';
import '../PageCommentComponents/AddCommentBar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function AddCommentBar({ onAddComment }) {
  const [newComment, setNewComment] = useState('');

  function handleInputChange(event) {
    setNewComment(event.target.value);
  }

  function handleSendComment() {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment(''); // Limpa o campo de texto após enviar
    }
  }

  return (
    <div className="add-comment-bar">
      <input 
        type="text" 
        placeholder="Adicionar comentário..."
        value={newComment}
        onChange={handleInputChange}
        className="input-add-comment"
      />
      <button onClick={handleSendComment} className="send-comment-btn">
        <i class="bi bi-arrow-right-circle bi-send-comment"></i>
      </button>
    </div>
  );
}

export default AddCommentBar;
