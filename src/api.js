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
