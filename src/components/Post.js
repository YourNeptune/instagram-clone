import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../css/Post.css";
import { db } from "../firebase";
import firebase from "firebase";
import CommentPostForm from './CommentPostForm'

const Post = ({ user, username, imageURL, caption, postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
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
          <p className="post__comment">
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <CommentPostForm
          comment={comment}
          setComment={setComment}
          postComment={postComment}
        />
      )}
    </div>
  );
};

export default Post;
