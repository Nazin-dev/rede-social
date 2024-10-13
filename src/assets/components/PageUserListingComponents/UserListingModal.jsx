import './UserListingStyle.css';
import Modal from 'react-modal';
import UserListingFeed from './UserListingFeed.jsx';

function UserListingModal({isOpen, closeModal, NameText}) {
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
    
      <UserListingFeed />

    </Modal>
  );
};

export default UserListingModal;