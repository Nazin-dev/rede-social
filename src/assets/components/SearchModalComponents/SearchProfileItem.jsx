import './SearchProfileItem.css';

function SearchProfileItem({ userProfile, userName, name, onDelete }) {
  return (
    <div className="search-profile-item">
      <div className="search-profile-user">
        <div className="search-space">
          <div className="search-user-img-pic">
            <img src={userProfile} alt="" className="pic-user-search" />
          </div>

          <div className="search-user-content">
            <div className="search-name-user-content">
              <span className="search-name-user">{userName}</span>
            </div>
            <div className="search-name-content">
              <span className="search-name">{name}</span>
            </div>
          </div>
        </div>

        {/* Botão de delete */}
        <div className="delete-content" onClick={() => {
console.log("Delete button clicked for user:", userName);
  onDelete();
}}>
          <div className="delete-btn-user">
            <i className="bi bi-x search-icon-x"></i>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default SearchProfileItem;
