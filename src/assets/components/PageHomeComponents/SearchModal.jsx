import './SearchModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchProfileFeed from '../SearchModalComponents/SearchProfileFeed';
import React from 'react';  
import Modal from 'react-modal';

function SearchModal({ isOpen, closeModal, profiles, onDeleteProfile }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal-search-content"
        overlayClassName="modal-search-overlay"
        contentLabel="Pesquisar"
      >
        <div className="modal-search">
          <div className="field-search">
            {/* Botão de voltar */}
            <div className="close-btn-search" onClick={closeModal}>
              <i className="bi bi-arrow-left"></i>
            </div>
            
            {/* Barra de pesquisa */}
            <form className='form-search'>
              <input type="text" placeholder='Pesquisar' />
              <button type="submit" className="search-icon">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          {/* Mostrar mensagem se a lista de perfis estiver vazia */}
          {profiles.length === 0 ? (
            <div className="search-history">
              <p>Nenhum histórico de pesquisa disponível</p>
            </div>
          ) : (
            <SearchProfileFeed profiles={profiles} onDeleteProfile={onDeleteProfile} />
          )}
        </div>
      </Modal>
    </>
  );
}

export default SearchModal;
