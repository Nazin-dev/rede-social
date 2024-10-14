import '../PageHomeComponents/PostFeed.css';
import PostItem from '../PageHomeComponents/PostItem.jsx'



function PostFeed({ posts }) {


  return (
    <div className="post-feed">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          userProfile={post.user.img || Profile}
          userid={post.user.id}
          userName={post.user.username}
          colorname={post.user.color}
          userLocation={"Brasil"}
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