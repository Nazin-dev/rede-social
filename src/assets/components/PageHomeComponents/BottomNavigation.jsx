import React, { useState } from 'react';
import '../PageHomeComponents/BottomNavigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePostModal from './CreatePostModal';
import { useNavigate } from "react-router-dom";


function BottomNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  function navigateUseProfile() {
    navigate("/user-profile")
  }

  function navigateHomePage() {
    navigate("/home")
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="bottom-navigation">
      <div className="icon home" onClick={navigateHomePage}>
        <i className="bi bi-house"></i>
      </div>
      <div className="icon search"><i className="bi bi-search"></i></div>

      <div className="icon add-post" onClick={openModal}>
        <i className="bi bi-plus-square"></i>
      </div>

      <div className="icon profile" onClick={navigateUseProfile}>
        <i className="bi bi-person"></i>
      </div>
      <CreatePostModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default BottomNavigation;