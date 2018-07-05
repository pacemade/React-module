import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>By: {this.props.author}</h2>
        <h3>There is a body property here: {this.props.body}</h3>
        <h4>Comments: {this.props.comments}</h4>
      </div>
    )
  }
}


export default Post;
