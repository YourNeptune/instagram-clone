
const CommentPostForm = ({ comment, setComment, postComment }) => {
  return (
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
  );
};

export default CommentPostForm
