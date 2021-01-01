import "./App.css";
import { useState, useEffect } from "react";
import Article from "./Article";

const url =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=R8UZwRYzxISUuQLL0pWK1EqZGX2AjPTH";

function App() {
  const [articles, setArticles] = useState([]);

  const fectchData = async () => {
    const response = await fetch(url);
    const data = response.json();
    data.then((item) => {
      setArticles(item.response.docs);
    });
  };
  console.log(articles);
  useEffect(() => {
    fectchData();
  }, []);
  return (
    //BEM Convention
    <div className="app">
      <h2 className="app__title">Popular Article of New York times</h2>
      <div className="app__search">
        <input
          type="text"
          className="app__input"
          placeholder="Search article"
        />
      </div>
      <div className="app__body">
        {articles.map((item) => (
          <Article
            key={item._id}
            title={item.abstract}
            date={item.pub_date}
            word={item.word_count}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
