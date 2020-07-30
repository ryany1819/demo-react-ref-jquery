import React, { Fragment, useRef } from "react";
import $ from "jquery";

export default function UssRef({ title }) {
  const titleRef = useRef();
  const handleClick = () => {
    const el = titleRef.current;
    $(el).toggleClass("green red");
  };
  return (
    <Fragment>
      <h1>{title}</h1>
      <h2 className="green" ref={titleRef}>
        Ref using useRef() Hook
      </h2>
      <button onClick={handleClick}>Click</button>
    </Fragment>
  );
}
