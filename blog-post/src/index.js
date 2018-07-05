import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';


var post = {
  title: "This is a book",
  author: "Author Man",
  body: "Issa body property",
  comments: ["...", "not bad would try again", "what a poo poo book never again"]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root'));
