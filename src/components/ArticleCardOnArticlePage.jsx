import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";

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
        <p id="likes">likes: {article.votes}</p>
      </>
    );
  }
}
