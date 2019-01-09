import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./child";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      currentTodo: "",
      todoarray: []
    };
  }
  IncrementCounter = e => {
    this.setState({ count: this.state.count + 1 });
  };
  addTodo = () => {
    let newTodo = this.state.todoarray.slice();
    newTodo.push(this.state.currentTodo);

    this.setState({ currentTodo: "", todoarray: newTodo });
  };
  onChangeInput = e => {
    this.setState({ currentTodo: e.target.value });
  };
  deleteTodo = i => {
    let newTodo = this.state.todoarray.slice();
    newTodo.splice(i, 1);

    this.setState({ todoarray: newTodo });
  };
  render() {
    let displayList = this.state.todoarray.map((e, i) => {
      // return (
      //   <li key={i}>
      //     {e}
      //     <button className="btn-danger" onClick={this.deleteTodo}>
      //       x
      //     </button>
      //   </li>
      // );
      return (
        <Child indexval={i} elementsval={e} deleteList={this.deleteTodo} />
      );
    });
    return (
      <div className="App">
        Basic Counter App :=>
        <button className="btn-primary" onClick={this.IncrementCounter}>
          Click Me Bro
        </button>
        {this.state.count}
        <br />
        <br />
        <hr />
        ToDo app Start :
        <input
          placeholder="Enter your wish dear"
          value={this.state.currentTodo}
          onChange={this.onChangeInput}
        />
        <button className="btn-success" onClick={this.addTodo}>
          Click me !
        </button>
        {this.state.todoarray.length === 0 ? (
          "Y ou Entered Nothing Dear"
        ) : (
          <ul>{displayList}</ul>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
