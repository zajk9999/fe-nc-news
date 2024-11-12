import { useState } from "react";
import { deleteCommentById } from "../api";

export default function DeleteButton({ comment_id, onUpdate }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const handleDelete = (comment_id) => {
    setIsDeleting(true);
    deleteCommentById(comment_id)
      .then(() => {
        onUpdate();
      })
      .catch((err) => {
        setIsDeleting(false);
        setError("Something went wrong, please try again");
      });
  };

  return (
    <>
      {isDeleting ? (
        <p>Deleting</p>
      ) : (
        <button id="delete-button" onClick={() => handleDelete(comment_id)}>
          {error ? <p>{error}</p> : <>Delete comment</>}
        </button>
      )}
    </>
  );
}
