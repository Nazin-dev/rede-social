import './UserProfile.css';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import ProfileInfo from '../components/PageUserProfileComponents/ProfileInfo.jsx';

function UserProfile() {
  return(
    <div className="body-user-profile">
      <BottomNavigation />
      <ProfileInfo />
    </div>
  );
};

export default UserProfile;