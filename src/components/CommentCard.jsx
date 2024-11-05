import { Link } from "react-router-dom";

export default function CommentCard(props) {
  const { comment } = props;
  return (
    <div className="comment-card">
      <h3>{comment.body}</h3>
      <p>by {comment.author}</p>
      <p className="likes">Likes: {comment.votes}</p>
    </div>
  );
}
