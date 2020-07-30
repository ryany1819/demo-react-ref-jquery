import React, { Component, Fragment } from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";

export default class StringRef extends Component {
  handleClick = () => {
    const el = findDOMNode(this.refs.title);
    $(el).toggleClass("green red");
  };
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h2 className="green" ref="title">
          Ref using string
        </h2>
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    );
  }
}
