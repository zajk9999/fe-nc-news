import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-3xxb.onrender.com/api/",
});

export function getArticles() {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
}

export function getCommentsByArticleId(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
}

export function getLikesByArticleId(article_id) {
  return api.get(`/articles/${article_id}`).then(
    ({
      data: {
        article: { votes },
      },
    }) => {
      return votes;
    }
  );
}

export function patchLikesByArticleId(article_id, likes) {
  const voteUpdate = { newVote: likes };
  return api
    .patch(`/articles/${article_id}`, voteUpdate)
    .then(({ data: { article } }) => {
      return article;
    });
}
