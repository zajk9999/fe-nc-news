import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <ol>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ol>
    );
  }
}
