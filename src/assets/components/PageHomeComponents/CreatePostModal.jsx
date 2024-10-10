import React, { useState } from 'react';
import '../PageHomeComponents/CreatePostModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from 'react-modal';

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
      setPostImage(URL.createObjectURL(file)); // Exibe a imagem
      setImageName(file.name); // Armazena o nome da imagem
    }
  }

  // Função de envio do post
  function handleSubmit() {
    // Aqui você pode enviar os dados para o servidor ou salvar em algum estado
    console.log('Texto do post:', postText);
    console.log('Imagem do post:', postImage);

    // Resetar os campos
    setPostText('');
    setPostImage(null);
    setImageName(''); // Reseta o nome da imagem
    closeModal();
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
          <button onClick={handleSubmit} className="submit-btn">Enviar</button>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePostModal;
