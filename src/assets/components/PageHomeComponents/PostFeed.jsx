import '../PageHomeComponents/PostFeed.css';
import PostItem from '../PageHomeComponents/PostItem.jsx'
import ImagePost from '../../img/post.png'
import Profile from '../../img/profile/profile.png'
import { getPosts } from '../../../services/apiServices.js';

function PostFeed() {

  getPosts().then((posts) => {
    console.log(posts);
  }).catch((error) => {
    console.error('Erro ao buscar posts:', error);
  });

  return (
    <div className="post-feed">
      <PostItem 
      userProfile={Profile}
      userName="Henry" 
      userLocation="Paraguai" 
      postText="Earlier this year, a friend of mine almost had his young daughter taken from him in California just because he wanted her to wait a few years to permanently transition." 
      postImage={ImagePost} 
      likes="567" 
      timeAgo="9 minutos"/>
    </div>
  );
};

export default PostFeed;