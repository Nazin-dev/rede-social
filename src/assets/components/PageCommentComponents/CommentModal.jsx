import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CommentFeed from '../PageCommentComponents/CommentFeed.jsx';
import AddCommentBar from '../PageCommentComponents/AddCommentBar.jsx';
import '../PageCommentComponents/CommentModal.css';
import { getComments, createComment } from '../../../services/apiServices.js';

Modal.setAppElement('#root');

function CommentModal({ isOpen, closeModal, idpost }) {
  const [comments, setComments] = useState([]);

  // useEffect para buscar os comentários apenas quando o modal abrir e o idpost estiver disponível
  useEffect(() => {
    if (isOpen && idpost) {
      fetchComments(idpost);
    }
  }, [isOpen, idpost]); // Executa apenas quando `isOpen` ou `idpost` mudarem

  async function handleAddComment(newCommentText) {
    // Cria um novo comentário
    try {
      await createComment(idpost, { content: newCommentText });
      fetchComments(idpost); // Atualiza a lista de comentários após adicionar
    } catch (error) {
      console.error('Erro ao criar comentário:', error);
    }
  }

  async function fetchComments(id) {
    try {
      const response = await getComments(id);
      setComments(response);
      console.log(response);
    } catch (error) {
      console.error('Erro ao pegar os posts', error);
    }
  };

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
            <i className="bi bi-arrow-right-short"></i>
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
