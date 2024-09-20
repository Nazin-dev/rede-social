import React, { useState } from 'react';
import '../PageHomeComponents/BottomNavigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePostModal from './CreatePostModal';


function BottomNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="bottom-navigation">
      <div className="icon home"><i className="bi bi-house"></i></div>
      <div className="icon search"><i className="bi bi-search"></i></div>

      <div className="icon add-post" onClick={openModal}>
        <i className="bi bi-plus-square"></i>
      </div>

      <div className="icon profile"><i className="bi bi-person"></i></div>
      <CreatePostModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default BottomNavigation;