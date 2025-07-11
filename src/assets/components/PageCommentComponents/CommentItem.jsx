import '../PageCommentComponents/CommentItem.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CommentItem({userProfile, userName, commentText,timeAgo, colorname = "#fff"}) {
  return(
    <div className="comment">
      <div className="user-comment">
        <div className="user-image-profile">
          <img src={userProfile} alt="" className='profile-pic-comment'/>
        </div>

        <div className="user-content">
          <div className="user-content-header">
            <span className="user-name" style={{color: colorname}}>{userName}</span>
            <span className="user-time-ago">{timeAgo}</span>
          </div>
          <div className="user-comment-text">
            <span className="user-text">{commentText}</span>
          </div>
          <div className="user-actions">
            <div className="icon-actions-comment chat-comment"><i className="bi bi-chat-right-text"></i></div>
            <div className="icon-actions-comment liked-comment"><i className="bi bi-heart"></i></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommentItem;