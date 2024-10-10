import './NotificationItem.css';

function NotificationItem({userProfile, userName, textNotification, timeAgo}) {
  return (
    <div className="notification-profile-item">
      <div className="notification-profile-user">
        <div className="notification-space">
          <div className="notification-user-img-pic">
            <img src={userProfile} alt="" className="pic-user-notification" />
          </div>

          <div className="notification-user-content">
            <div className="notification-name-user-content">
              <span className="notification-name-user">{userName}</span>
              <span className="notification-time-ago">{timeAgo}</span>
            </div>
            <div className="notification-text-content">
              <span className="notification-text">{textNotification}</span>
            </div>
          </div>
        </div>

      </div>
      <div className="notification-btn-follower">
        <button className="follower-back">Seguir de volta</button>
      </div>
    </div>
  );
};

export default NotificationItem;