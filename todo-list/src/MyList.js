import React, { Component } from 'react';
import logo from './logo.svg';
import ListItem from './ListItem.js'
import './App.css';

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }
  clearList(e) {
    console.log("Clearing that ish!");
    this.setState({
      toDoItemArray: []
    })
  }
  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem(e) {
    e.preventDefault()
    var toDos = this.state.toDoItemArray
    toDos.push(this.state.newItem)
    this.setState({
      toDoItemArray: toDos, newItem: ""
    })
  }

  render() {

    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop slacking on:</h1>
        <ul>
          {toDoItems}
        </ul>
        <form>
          <input type="text"
            placeholder="Add an item"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)} > Add me!</button>
        </form>
        <button onClick={(e) => this.clearList(e)} > Clear List</button>
      </div>
    )
  }
}

export default MyList;
