import '../PageHomeComponents/PostItem.css';
import React, { useState } from 'react';

function PostItem({userProfile, userName, userLocation, postText, postImage, likes, timeAgo}) {
  const [isLiked, setIsLiked] = useState(false);

  function LikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-info">
          <img src={userProfile} alt="" className="profile-pic" />
          <div className="post-info">
            <span className="username">{userName}</span>
            <span className="location">{userLocation}</span>
          </div>
        </div>
        <div className="options-profile"><i className="bi bi-three-dots"></i></div>
      </div>
      <p className="post-text">{postText}</p>
      {postImage && <img src={postImage} alt="Post" className="post-image" />}
      <div className="icons-post">
        <div className="icon like" onClick={LikeClick}>
          <i className={`bi ${isLiked ? 'bi-heart-fill liked' : 'bi-heart'}`}></i>
        </div>
        <div className="icon comments"><i className="bi bi-chat"></i></div>
        <div className="icon send-post"><i className="bi bi-send"></i></div>
      </div>
      <div className="post-footer">
        <span className='likes'>{likes} likes</span>
        <span className="time-ago">{timeAgo}</span>
      </div>
    </div>
  );
};

export default PostItem;