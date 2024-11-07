import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function CommentsList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <CommentAdder />
        <h1>Comments</h1>
        <ol>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ol>
      </>
    );
  }
}
