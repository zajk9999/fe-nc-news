import { useState } from "react";
import { deleteCommentById } from "../api";

export default function DeleteButton(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { comment_id } = props;
  const handleDelete = (comment_id) => {
    setIsDeleting(true);
    deleteCommentById(comment_id);
  };
  return (
    <>
      {isDeleting ? (
        <p>Deleting</p>
      ) : (
        <button id="delete-button" onClick={() => handleDelete(comment_id)}>
          <>Delete comment</>
        </button>
      )}
    </>
  );
}
