import '../PageUserProfileComponents/ProfileControlPosts.css';
import MyPosts from './MyPosts';

function ControlPosts({namePostsHeader}) {
  return (
    <>
      <div className="control-posts">
        <p className="my-posts">{namePostsHeader}</p>
        <MyPosts />
      </div>
      
    </>
  );
};

export default ControlPosts;