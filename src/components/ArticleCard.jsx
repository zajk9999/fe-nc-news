import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { article } = props;
  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>"{article.title}"</h2>
      </Link>
      <h3>by {article.author}</h3>
      <p id="likes-and-comments">
        Likes: {article.votes} Comments: {article.comment_count}
      </p>
    </div>
  );
}
