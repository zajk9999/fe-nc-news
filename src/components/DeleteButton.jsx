import { useState } from "react";
import { deleteCommentById } from "../api";

export default function DeleteButton(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { comment_id } = props;
  const [error, setError] = useState(null);
  const handleDelete = (comment_id) => {
    setIsDeleting(true);
    deleteCommentById(comment_id).catch((err) => {
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
