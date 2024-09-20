import '../PageHomeComponents/PostFeed.css';
import PostItem from '../PageHomeComponents/PostItem.jsx'
import ImagePost from '../../img/post.png'
import ImagePost2 from '../../img/posts/post2.png'
import ImagePost3 from '../../img/posts/post3.png'
import ImagePost4 from '../../img/posts/post4.png'
import ImagePost5 from '../../img/posts/post5.png'
import ImagePost6 from '../../img/posts/post6.png'
import ImagePost7 from '../../img/posts/post7.png'
import ImagePost9 from '../../img/posts/post9.png'
import Profile from '../../img/profile/profile.png'
import Profile2 from '../../img/profile/profile2.png'
import Profile3 from '../../img/profile/profile3.png'
import Profile4 from '../../img/profile/profile4.png'
import Profile5 from '../../img/profile/profile5.png'


function PostFeed() {
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

      <PostItem 
      userProfile={Profile2}
      userName="Kelyx" 
      userLocation="United States" 
      postText="Earlier this year, a friend of mine almost had his young." 
      postImage={ImagePost2} 
      likes="567" 
      timeAgo="9 minutos"/>

      <PostItem 
      userProfile={Profile3}
      userName="Renato 3Oitão" 
      userLocation="Brazil" 
      postText="Você pagaria para ser sodomizado?" 
      postImage={ImagePost6} 
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

      <PostItem 
      userProfile={ImagePost9}
      userName="Lula da Picanha" 
      userLocation="União Sovietica" 
      postText="Meus companheiros, eu troxe a picanha e a cervejinha para o churras!" 
      postImage={ImagePost9} 
      likes="567" 
      timeAgo="9 minutos"/>
      
    </div>
  );
};

export default PostFeed;