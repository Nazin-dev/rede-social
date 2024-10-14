import './UserListingStyle.css';
import UserListingItem from './UserListingItem';
import { API_URL_IMAGE } from '../../../services/apiServices';

function UserListingFeed({ listUsers }) {
  return (
    <div className="user-listing-feed-content">
      {listUsers.map((user) => (
        <UserListingItem
          key={user.id}
          id={user.id}
          userProfile={API_URL_IMAGE + user.img}
          userName={user.username}
          fullName={user.fullName}
          btnType="followers"
          btnName="Deixar de seguir"
        />
      ))}
    </div>
  );
}

export default UserListingFeed;
