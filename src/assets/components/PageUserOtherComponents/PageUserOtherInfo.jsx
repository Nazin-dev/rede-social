import ControlButtons from "../PageUserProfileComponents/ProfileControlButtons.jsx";
import ControlPosts from "../PageUserProfileComponents/ProfileControlPosts.jsx";
import UserStats from "../PageUserProfileComponents/UserStats.jsx"
import Profile from "../../img/profile/profile3.png";
import './PageUserOtherInfo.css';

function UserOtherInfo() {
  return (
    <div className="body-other-user">
      <UserStats
      userProfile={Profile}
      userName="Nailton Reis"
      numbersPosts="15"
      followers="165"
      following="1050"
      userBio="🎓 Estudante de Medicina 
               😎 Fan de DBZ
               ❤️ Solteiro
               🎂 25 years"  
      />
      <ControlButtons 
      primaryText="Seguir Perfl"
      secondaryText="Compartilhar Perfil"
      />
      <ControlPosts 
      namePostsHeader="Minhas Postagens"
      />
    </div>
  );
};

export default UserOtherInfo;