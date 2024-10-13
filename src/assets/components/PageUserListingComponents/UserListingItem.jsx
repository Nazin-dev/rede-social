import './UserListingStyle.css';

function UserListingItem({userProfile, userName, fullName}) {
  return (
    <div className="user-listing-item">
      <div className="user-listing-details">
        <div className="user-listing-space">
          <div className="user-listing-img">
            <img src={userProfile} alt="" className="user-listing-pic" />
          </div>

          <div className="user-listing-content">
            <div className="user-listing-name-time">
              <span className="user-listing-name">{userName}</span>
            </div>
            <div className="user-listing-text">
              <span className="user-listing-notification">{fullName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="user-listing-follow-btn">
        <button className="btn-action">Seguir de volta</button>
      </div>
    </div>
  );
}

export default UserListingItem;