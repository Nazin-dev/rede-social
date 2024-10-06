import './ProfileInfo.css';
import UserStats from './UserStats.jsx';
import ControlButtons from './ProfileControlButtons.jsx';
import ControlPosts from './ProfileControlPosts.jsx';
import Profile from '../../img/profile/profile4.png'

function ProfileInfo() {
  return(
    <>
      <UserStats
      userProfile={Profile}
      userName="Nailton Reis"
      numbersPosts="5"
      followers="100"
      following="567"
      userBio="🎓 Estudante de Direito 
               😎 Fan de DBZ
               ❤️ Solteiro
               🎂 18 years"  
      />
      <ControlButtons />
      <ControlPosts />
    </>
  );
};

export default ProfileInfo;