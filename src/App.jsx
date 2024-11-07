import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";
import userContext from "./contexts/userContext";
import { createContext, useState } from "react";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <userContext.Provider value={{ user, setUser }}>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </main>
    </userContext.Provider>
  );
}

export default App;
