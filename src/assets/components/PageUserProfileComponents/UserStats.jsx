import '../PageUserProfileComponents/UserStats.css';

// Essa é parte superio do perfil de usuario onde se encontra, seguidores, postagens e seguindo.
function UserStats({ userProfile, userName, followers, following, numbersPosts, userBio}) {
  return(
    <>
      <div className="content-stats">
        <div className="profile-pic-name">
          <img src={userProfile} alt="" className="profile-pic-user" />
          <span className="name-user">{userName}</span>
        </div>
        <div className="stats posts-profile">
          <span className="numbers-posts">{numbersPosts}</span>
          <p className="p-posts">Postagens</p>
        </div>
        <div className="stats followers">
          <span className="numbers-followers">{followers}</span>
          <p className="p-followers">Seguidores</p>
        </div>
        <div className="stats following">
          <span className="numbers-following">{following}</span>
          <p className="p-following">Seguindo</p>
        </div>
      </div>
      <div className='profile-bio'>
        <span className='user-bio'>{userBio}</span>
      </div>
    </>
  );
};

export default UserStats;