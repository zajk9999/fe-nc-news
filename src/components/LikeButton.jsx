import React, { useState, useEffect } from "react";
import { getLikesByArticleId, patchLikesByArticleId } from "../api";
export default function LikeButton({ article_id }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLikesByArticleId(article_id).then((likes) => {
      setLikes(likes);
    });
  }, []);

  const handleLike = () => {
    setLikes((current) => current + 1);
    setIsLiked(true);
    patchLikesByArticleId(article_id, 1).catch((err) => {
      setLikes((current) => current - 1);
      setError("You like was unsuccessful. Please try again");
      setIsLiked(false);
    });
  };

  if (isLiked) {
    return (
      <>
        <button disabled id="disabled-button">
          Thank you!!
        </button>
        <p>Likes: {likes}</p>
      </>
    );
  } else
    return (
      <>
        <button id="like-button" onClick={handleLike}>
          Click me if you liked it!
          {error ? <p>{error}</p> : null}
        </button>
        <p>Likes: {likes}</p>
      </>
    );
}
