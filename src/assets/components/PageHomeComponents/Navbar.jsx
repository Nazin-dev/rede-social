import '../PageHomeComponents/Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import melonzone from '../../img/melonzone.png';
import NotificationModal from './NotificationModal';
import React, { useState } from 'react';

function Navbar() {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

  function openNotificationModal() {
    setNotificationModalOpen(true);
  }

  function closeNotificationModal() {
    setNotificationModalOpen(false);
  }

  function alertSend() {
    alert('Está função está desativada no momento.')
  }

  return (
    <div className="navbar">
      <div className="icon notification" onClick={openNotificationModal}>
        <i className="bi bi-bell"></i>
      </div>
      <div className='icon melonzone'><img src={melonzone} alt="" /></div>
      <div className="icon send-message"onClick={alertSend}>
        <i className="bi bi-send"></i>
      </div>

      <NotificationModal 
      isOpen={isNotificationModalOpen}
      closeModal={closeNotificationModal}
      />
    </div>
  );
};

export default Navbar;