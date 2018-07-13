import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleFormInput (e) {
    console.log(e);
    this.setState({
      body: e.target.value
    })
  }

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
        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)}/>
        <h4>Comments</h4>
          {allComments}
      </div>
    )
  }
}


export default Post;
