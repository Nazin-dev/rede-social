import './NotificationModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';  
import Modal from 'react-modal';
import NotificationFeed from '../NotificationModalComponents/NotificationFeed';

function NotificationModal({isOpen, closeModal}) {
  return (
    <>
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-notification-content"
      overlayClassName="modal-notification-overlay"
      contentLabel="Notificações"
      >
        <div className="notification-modal">

          <div className="notification-header">
            <div className="exit-notification-btn" onClick={closeModal}>
              <i className="bi bi-arrow-left exit-not"></i>
            </div>
            <div className="title-notification-content">
              <div className="title-not">Notificações</div>
            </div>
          </div>

          <div className="notification-recent">
            <div className="recent">Recentes</div>
          </div>

          <NotificationFeed />

          <div className="notification-old">
            <div className="old">Antigas</div>
          </div>

          <NotificationFeed />
          <NotificationFeed />

        </div>
        
      </Modal>
    </>
  );
};

export default NotificationModal;