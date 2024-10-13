import './UserListingStyle.css';
import UserListingItem from './UserListingItem';
import Pic from '../../img/profile/profile3.png'

function UserListingFeed() {
  return (
    <div className="user-listing-feed-content">
      <UserListingItem 
      userProfile={Pic}
      userName="Alex_pindaiba"
      fullName="Alex Pindaiba dos Santos"
      />
      <UserListingItem 
      userProfile={Pic}
      userName="Alex_pindaiba"
      fullName="Alex Pindaiba dos Santos"
      />
      <UserListingItem 
      userProfile={Pic}
      userName="Alex_pindaiba"
      fullName="Alex Pindaiba dos Santos"
      />
    </div>
  );
};

export default UserListingFeed;