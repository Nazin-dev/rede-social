import ControlButtons from "../PageUserProfileComponents/ProfileControlButtons.jsx";
import ControlPosts from "../PageUserProfileComponents/ProfileControlPosts.jsx";
import UserStats from "../PageUserProfileComponents/UserStats.jsx"
import PostItem from "../PageHomeComponents/PostItem.jsx";
import React, { useState, useEffect } from "react";
import { getUserById } from "../../../services/apiServices.js";
import './PageUserOtherInfo.css';

function UserOtherInfo({ userid }) {
  const [Profile, setProfile] = useState({
    userDTO: {},
    posts: [],
  });

  useEffect(() => {
    async function fetchMyProfile() {
      try {
        const response = await getUserById(userid);
        setProfile(response);
        console.log(response);
      } catch (error) {
        console.error('Erro ao pegar os posts', error);
      }
    }

    fetchMyProfile(); // Chama a função para buscar os posts
  }, []);

  return (
    <div className="body-other-user">
      <UserStats
        userProfile={Profile.userDTO.img}
        userName={Profile.userDTO.name}
        numbersPosts={Profile.totalPosts}
        followers={Profile.totalFollowers}
        following={Profile.totalFollowing}
        userBio={Profile.userDTO.bio}
      />
      <ControlButtons
        primaryText="Seguir Perfl"
        secondaryText="Compartilhar Perfil"
      />
      <div className="control-posts">
        <p className="my-posts">Meus Posts</p>
        {Profile.posts.map((post) => (
          <PostItem
            userid={Profile.userDTO.id}
            key={post.id}
            userProfile={Profile.userDTO.img}
            userName={Profile.userDTO.name}
            userLocation={"No mundo da Lua"}
            postText={post.text}
            postImage={post.img ? post.img : null}
            likes={post.totalLikes}
            likedByUser={post.likedByUser}
            dateFromApi={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default UserOtherInfo;