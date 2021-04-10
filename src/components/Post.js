import { Avatar } from '@material-ui/core';
import '../css/Post.css'

const Post = () => {
    return (
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <h3>username</h3>
        </div>
        <img
          className="post__image"
          src="https://images.unsplash.com/photo-1617939254715-cce00563cbc3"
          alt="post"
        />
        <h4 className="post__text">
          <strong>Username: </strong> caption
        </h4>
      </div>
    );
}

export default Post
