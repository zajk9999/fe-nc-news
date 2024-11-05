export default function ArticleCard(props) {
  const { article } = props;
  return (
    <div className="article-card">
      <h2>"{article.title}"</h2>
      <h3>by {article.author}</h3>
      <p id="likes-and-comments">
        Likes: {article.votes} Comments: {article.comment_count}
      </p>
    </div>
  );
}
