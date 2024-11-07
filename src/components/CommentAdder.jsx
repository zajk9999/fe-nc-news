import { postCommentByArticleId } from "../api";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import userContext from "../contexts/userContext";

export default function CommentAdder() {
  const { user } = useContext(userContext);
  const { article_id } = useParams();
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      {isPosting && <p>Posting comment</p>}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (event.target[0].value) {
            setIsPosting(true);
            postCommentByArticleId(article_id, user, event.target[0].value)
              .then(() => {
                event.target[0].value = "";
                setError(null);
                setIsPosting(false);
              })
              .catch((err) => {
                setIsPosting(false);
                setError("Something went wrong, please try again");
              });
          } else setError("Please write your comment below befoe submitting");
        }}
      >
        <h3>
          {error ? (
            <p>{error}</p>
          ) : (
            <label htmlFor="input-box">Tell us what you think:</label>
          )}
        </h3>
        <textarea id="input-box" type="form" />
        <p>
          <input type="submit" />
        </p>
      </form>
    </>
  );
}
