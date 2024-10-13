import '../PageHomeComponents/PostFeed.css';
import PostItem from '../PageHomeComponents/PostItem.jsx'
import ImagePost from '../../img/post.png'
import Profile from '../../img/profile/profile.png'


function PostFeed({ posts }) {


  return (
    <div className="post-feed">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          userProfile={post.user.img || Profile}
          userid={post.user.id}
          userName={post.user.name}
          userLocation={"No mundo da Lua"}
          postText={post.text}
          postImage={post.img}
          likes={post.totalLikes}
          likedByUser={post.likedByUser} 
          dateFromApi={post.timestamp}
        />
      ))}
    </div>
  );
};

export default PostFeed;