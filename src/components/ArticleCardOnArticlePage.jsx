import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import LikeButton from "./LikeButton";

export default function ArticleCardOnArticlePage() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h1 id="title">{article.title}</h1>
        <img src={article.article_img_url} />
        <p id="article-body">{article.body}</p>
        <LikeButton key={article.article_id} article_id={article.article_id} />
      </>
    );
  }
}
