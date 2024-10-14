import React, { useState } from 'react';
import '../PageHomeComponents/CreatePostModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from 'react-modal';
import { createPost } from '../../../services/apiServices';

Modal.setAppElement('#root'); // Necessário para acessibilidade

function CreatePostModal({ isOpen, closeModal }) {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [imageName, setImageName] = useState(""); // Estado para armazenar o nome da imagem

  // Função para alterar o texto do post
  function handleTextChange(event) {
    setPostText(event.target.value);
  }

  // Função para alterar a imagem
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setPostImage(file); // Armazena o arquivo da imagem
      setImageName(file.name); // Armazena o nome da imagem
    }
  }

  // Função de envio do post
  async function handleSubmit(event) {
    event.preventDefault();
   
    // Cria um objeto FormData para enviar os dados do formulário
    const formData = new FormData();
    formData.append('text', postText);
    formData.append('file', postImage);

    try {
      const response = await createPost(formData);
      console.log('Post criado:', response);
      // Resetar os campos após a criação do post
      setPostText('');
      setPostImage(null);
      setImageName('');
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Criar Post"
    >
      {/* Área de texto com scroll quando necessário */}
      <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Digite algo aqui..."
        value={postText}
        onChange={handleTextChange}
        className="post-textarea"
      />
      
      {/* Input para upload de imagem */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input"
        id='image-upload'
      />

      {/* Exibir o nome da imagem abaixo do campo de texto */}
      {imageName && (
        <p className="image-name">Imagem selecionada: {imageName}</p>
      )}

      <div className="modal-actions">
        <div className="actions-add">
          <label htmlFor="image-upload">
            <div className="icon-modal add-image"><i className="bi bi-plus-circle"></i></div>
          </label>
          <div className="icon-modal add-map"><i className="bi bi-geo-alt"></i></div>
          <div className="icon-modal person-add"><i className="bi bi-person-add"></i></div>
        </div>
        <div className="actions-post-cancel">
          <button onClick={closeModal} className="cancel-btn">Cancelar</button>
          <button type='submit' className="submit-btn">Enviar</button>
        </div>
      </div>
      </form>
    </Modal>
  );
}

export default CreatePostModal;
