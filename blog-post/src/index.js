import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';


var post = {
  title: "This is a book",
  authors: ["Author Man", "Author Woman", "Author Person"],
  body: "Issa body property",
  comments: ["...", "not bad would try again", "what a poo poo book never again"]
}

ReactDOM.render(
  <Post
    title={post.title}
    allAuthors={post.authors}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root'));
