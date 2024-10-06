import PostItem from "../PageHomeComponents/PostItem";
import Profile4 from '../../img/profile/profile4.png';
import ImagePost7 from '../../img/posts/post7.png'


function MyPosts() {
  return (
    <>
    <PostItem 
      userProfile={Profile4}
      userName="Mito" 
      userLocation="Brazil" 
      postText="Tiro neles. HAAHHA, aqui é o mito." 
      postImage={ImagePost7} 
      likes="567" 
      timeAgo="9 minutos"/>
      <PostItem 
      userProfile={Profile4}
      userName="Mito" 
      userLocation="Brazil" 
      postText="Tiro neles. HAAHHA, aqui é o mito." 
      postImage={ImagePost7} 
      likes="567" 
      timeAgo="9 minutos"/>
    </>
  );
};

export default MyPosts;