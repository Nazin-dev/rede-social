import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './SearchModal.css';
import SearchProfileFeed from '../SearchModalComponents/SearchProfileFeed.jsx';
import { searchUsers } from '../../../services/apiServices';

function SearchModal({ isOpen, closeModal, profiles, onDeleteProfile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função de busca de usuários chamada quando o usuário digita
  useEffect(() => {
    if (searchQuery.length > 0) {
      const delayDebounceFn = setTimeout(async () => {
        setLoading(true);
        try {
          const results = await searchUsers(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        } finally {
          setLoading(false);
        }
      }, 300); // Debounce de 300ms para evitar chamadas excessivas à API

      // Limpa o timeout se o valor de `searchQuery` mudar antes de 300ms
      return () => clearTimeout(delayDebounceFn);
    } else {
      setSearchResults([]); // Limpa os resultados se a consulta for vazia
    }
  }, [searchQuery]);

  // Função chamada ao mudar o valor do input
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Função chamada ao enviar o formulário de pesquisa
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
  };

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
            <form className="form-search" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Pesquisar"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button type="submit" className="search-icon">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          {/* Mostrar mensagem enquanto carrega */}
          {loading ? (
            <p>Carregando resultados...</p>
          ) : searchResults.length === 0 ? (
            <div className="search-history">
              <p>Nenhum usuário encontrado</p>
            </div>
          ) : (
            <SearchProfileFeed profiles={searchResults} onDeleteProfile={onDeleteProfile} />
          )}
        </div>
      </Modal>
    </>
  );
}

export default SearchModal;
