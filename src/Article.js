import React from "react";
import "./Article.css";

function Article({ word, title, date }) {
  return (
    <div className="article">
      <p className="article__title">{title}</p>
      <div className="article__info">
        <p className="article__date">{date}</p>
        <p className="article__word">{word}</p>
      </div>
    </div>
  );
}

export default Article;
