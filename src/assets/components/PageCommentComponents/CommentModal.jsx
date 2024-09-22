import React, { useState } from 'react';
import Modal from 'react-modal';
import CommentFeed from '../PageCommentComponents/CommentFeed.jsx';
import AddCommentBar from '../PageCommentComponents/AddCommentBar.jsx';
import '../PageCommentComponents/CommentModal.css';

Modal.setAppElement('#root');

function CommentModal({ isOpen, closeModal, initialComments }) {
  const [comments, setComments] = useState(initialComments);

  function handleAddComment(newCommentText) {
    const newComment = {
      userProfile: 'https://via.placeholder.com/50', // Placeholder para imagem de perfil
      userName: 'New_User', // Você pode substituir isso por um usuário real
      commentText: newCommentText,
      timeAgo: '1d', // Pode ser um timestamp real no futuro
    };
    setComments([newComment, ...comments]); // Adiciona o novo comentário no topo
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-content-full"
      overlayClassName="modal-overlay-full"
      contentLabel="Comentários"
    >
      <div className="comment-modal-header">
        <div className="title-comments">
          <h2>Comentários</h2>
        </div>
        <div className="btn-close-content">
          <button onClick={closeModal} className="close-modal-btn">
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>

      {/* Lista de Comentários */}
      <CommentFeed comments={comments} />

      {/* Barra de Adicionar Comentário */}
      <AddCommentBar onAddComment={handleAddComment} />
    </Modal>
  );
}

export default CommentModal;
