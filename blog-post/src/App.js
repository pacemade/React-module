import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  render() {
    let allComments = [
      <Comment body={this.props.comments[0]}/>,
      <Comment body={this.props.comments[1]}/>,
      <Comment body={this.props.comments[2]}/>
    ]
    // let authors = [
    //   <Author author={this.props.allAuthors[0]}/>,
    //   <Author author={this.props.allAuthors[1]}/>
    // ]
    // @type {Array}
    let authors = this.props.allAuthors.map( (author, index) => (
      <Author author={author} key={index}/>
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{authors}</h2>
        <h3>There is a body property here: {this.props.body}</h3>
        <h4>Comments</h4>
          {allComments}
      </div>
    )
  }
}


export default Post;
