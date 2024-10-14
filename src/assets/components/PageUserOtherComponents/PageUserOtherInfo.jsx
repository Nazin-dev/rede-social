import ControlButtons from "../PageUserProfileComponents/ProfileControlButtons.jsx";
import UserStats from "../PageUserProfileComponents/UserStats.jsx";
import PostItem from "../PageHomeComponents/PostItem.jsx";
import React, { useState, useEffect } from "react";
import { getUserById, followOrUnfollowUser } from "../../../services/apiServices.js";
import './PageUserOtherInfo.css';

function UserOtherInfo({ userid }) {
  const [profile, setProfile] = useState({
    userDTO: {},
    posts: [],
    isFollowing: false,
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getUserById(userid);
        setProfile(response);
        console.log(response);
      } catch (error) {
        console.error('Erro ao pegar o perfil do usuário', error);
      }
    }

    fetchProfile(); // Chama a função para buscar o perfil
  }, [userid]);

  async function handleFollowClick() {
    try {
      const newIsFollowing = await followOrUnfollowUser(userid);
      setProfile((prevProfile) => ({
        ...prevProfile,
        isFollowing: newIsFollowing,
      }));
      window.location.reload();
    } catch (error) {
      console.error('Erro ao seguir/deixar de seguir o usuário', error);
    }
  }

  return (
    <div className="body-other-user">
      <UserStats
        userId={profile.userDTO.id}
        userProfile={profile.userDTO.img}
        userName={profile.userDTO.username}
        numbersPosts={profile.totalPosts}
        followers={profile.totalFollowers}
        following={profile.totalFollowing}
        userBio={profile.userDTO.bio}
        colorname={profile.userDTO.color}
      />
      <ControlButtons
        primaryText={profile.isFollowing ? "Deixar de Seguir" : "Seguir Perfil"}
        secondaryText="Compartilhar Perfil"
        onPrimaryFunction={handleFollowClick}
      />
      <div className="control-posts">
        <p className="my-posts">Meus Posts</p>
        {profile.posts.map((post) => (
          <PostItem
            id={post.id}
            userid={profile.userDTO.id}
            key={post.id}
            userProfile={profile.userDTO.img}
            userName={profile.userDTO.username}
            userLocation={"Brasil"}
            postText={post.text}
            postImage={post.img ? post.img : null}
            likes={post.totalLikes}
            likedByUser={post.likedByUser}
            dateFromApi={post.timestamp}
            colorname={profile.userDTO.color}
          />
        ))}
      </div>
    </div>
  );
}

export default UserOtherInfo;
