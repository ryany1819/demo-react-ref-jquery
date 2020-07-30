import React, { Component, Fragment, createRef } from "react";
import $ from "jquery";

export default class CreateRef extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
  }
  handleClick = () => {
    const el = this.titleRef.current;
    $(el).toggleClass("green red");
  };

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h2 className="green" ref={this.titleRef}>
          Ref using CreateRef()
        </h2>
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    );
  }
}
