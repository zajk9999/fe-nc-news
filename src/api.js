import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-3xxb.onrender.com/api/",
});

export default function getAricles() {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}
