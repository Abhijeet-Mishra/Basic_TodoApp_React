import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <li key={this.props.indexval}>
          {this.props.elementsval}
          <button className="btn-danger" onClick={this.props.deleteList}>
            x
          </button>
        </li>
      </div>
    );
  }
}
