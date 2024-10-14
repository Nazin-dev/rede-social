import './UserListingStyle.css';
import Modal from 'react-modal';
import UserListingFeed from './UserListingFeed.jsx';
import { followesOfUserID, followingOfUserID } from '../../../services/apiServices';
import { useState, useEffect } from 'react';

function UserListingModal({ id, isOpen, closeModal, NameText }) {
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função que busca seguidores ou seguindo com base em `NameText`
  useEffect(() => {
    if (!isOpen) return;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        let response = [];

        if (NameText === "Seguidores") {
          response = await followesOfUserID(id);
        } else if (NameText === "Seguindo") {
          response = await followingOfUserID(id);
        }

        setListUsers(response);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id, isOpen, NameText]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-notification-content"
      overlayClassName="modal-notification-overlay"
      contentLabel="Notificações"
    >
      <div className="user-listing-header">
        <div className="exit-user-listing-btn" onClick={closeModal}>
          <i className="bi bi-arrow-left exit-user-list"></i>
        </div>
        <div className="title-user-listing-content">
          <div className="title-user-list">{NameText}</div>
        </div>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <UserListingFeed listUsers={listUsers} />
      )}
    </Modal>
  );
}

export default UserListingModal;
