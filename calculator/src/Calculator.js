import React, { Component } from 'react';

class Calculator extends Component {

  constructor (props) {
    super()
    this.calculate = this.calculate.bind(this)

    this.state={
      result: 0,
      operation: "+"
    }
  }

  calculate() {
    var val1 = (parseInt(this.refs.val1.value) || 0)
    var val2 = (parseInt(this.refs.val2.value) || 0)
    this.setState({
      result: 
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Apparently do whatever with React!</h1>

        <div className="add">
           <input type="text" ref="val1" onKeyUp={this.calculate}/>
           <span>
            <select className="operation">
             <option selected ref="+">"+"</option>
             <option ref="-">"-"</option>
             <option ref="x">"x"</option>
             <option ref="/">"/"</option>
            </select>
           </span>
           <input type="text" ref="val2" onKeyUp={this.calculate}/>
           <span>=</span>
           <h3>{this.state.result}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
