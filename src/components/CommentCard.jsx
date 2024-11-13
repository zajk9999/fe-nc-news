import { useContext } from "react";
import userContext from "../contexts/userContext";
import DeleteButton from "./DeleteButton";

export default function CommentCard({ comment, onUpdate }) {
  const { user } = useContext(userContext);

  return (
    <div className="comment-card">
      <h3>{comment.body}</h3>
      <p>by {comment.author}</p>
      <p className="likes">{comment.votes} Likes</p>
      {user === comment.author ? (
        <DeleteButton
          key={comment.comment_id}
          comment_id={comment.comment_id}
          onUpdate={onUpdate}
        />
      ) : null}
    </div>
  );
}
