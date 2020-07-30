import React, { Component, Fragment } from "react";
import $ from "jquery";

export default class CallbackRef extends Component {
  handleClick = () => {
    const el = this.titleRef;
    $(el).toggleClass("green red");
  };
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h2 className="green" ref={elem => (this.titleRef = elem)}>
          Ref using Callback Ref
        </h2>
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    );
  }
}
