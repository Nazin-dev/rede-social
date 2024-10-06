import '../PageUserProfileComponents/ProfileControlPosts.css';
import MyPosts from './MyPosts';

function ControlPosts() {
  return (
    <>
      <div className="control-posts">
        <p className="my-posts">Minhas Postagens</p>
        <MyPosts />
      </div>
      
    </>
  );
};

export default ControlPosts;