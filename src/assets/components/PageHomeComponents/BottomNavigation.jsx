import React, { useState } from 'react';
import '../PageHomeComponents/BottomNavigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePostModal from './CreatePostModal';
import SearchModal from './SearchModal'; // Importando o modal de pesquisa
import { useNavigate } from "react-router-dom";

function BottomNavigation() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Estado para armazenar os perfis de usuários
  const [profiles, setProfiles] = useState([
    {
      userProfile: 'path/to/profile/image1.png',
      userName: 'Alex_pindaiba',
      name: 'Alex Fernandes Pindaiba da Silva'
    },
    {
      userProfile: 'path/to/profile/image2.png',
      userName: 'john_doe',
      name: 'John Doe'
    }
  ]);

  const navigate = useNavigate();

  function navigateUseProfile() {
    navigate("/user-profile");
  }

  function navigateHomePage() {
    navigate("/home");
  }

  // Funções para abrir e fechar o modal de criação de post
  function openPostModal() {
    setIsPostModalOpen(true);
    setIsSearchModalOpen(false); // Fecha o modal de pesquisa se estiver aberto
  }

  function closePostModal() {
    setIsPostModalOpen(false);
  }

  // Funções para abrir e fechar o modal de pesquisa
  function openSearchModal() {
    setIsSearchModalOpen(true);
    setIsPostModalOpen(false); // Fecha o modal de post se estiver aberto
  }

  function closeSearchModal() {
    setIsSearchModalOpen(false);
  }

  // Função para deletar um perfil
  function deleteProfile(index) {
    console.log("Deleting profile at index:", index);
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  }


  return (
    <div className="bottom-navigation">
      <div className="icon home" onClick={navigateHomePage}>
        <i className="bi bi-house"></i>
      </div>

      {/* Ícone de pesquisa para abrir o modal de pesquisa */}
      <div className="icon search" onClick={openSearchModal}>
        <i className="bi bi-search"></i>
      </div>

      {/* Ícone de criação de post para abrir o modal de criação */}
      <div className="icon add-post" onClick={openPostModal}>
        <i className="bi bi-plus-square"></i>
      </div>

      <div className="icon profile" onClick={navigateUseProfile}>
        <i className="bi bi-person"></i>
      </div>

      {/* Modal de criação de post */}
      <CreatePostModal isOpen={isPostModalOpen} closeModal={closePostModal} />

      {/* Modal de pesquisa */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        closeModal={closeSearchModal} 
        profiles={profiles} 
        onDeleteProfile={deleteProfile} 
      />
    </div>
  );
}

export default BottomNavigation;
