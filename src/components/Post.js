import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../css/Post.css";
import { db } from "../firebase";

const Post = ({ username, imageURL, caption, postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = () => {};

  useEffect(() => {
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {};
  }, [postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageURL} alt="post" />
      <h4 className="post__text">
        <strong>{username} </strong> {caption}
      </h4>

      <div className="post__text">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      <form className="post__form">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          type="submit"
          disabled={!comment}
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
