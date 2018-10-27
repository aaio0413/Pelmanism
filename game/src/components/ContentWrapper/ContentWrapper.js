import React from "react";
import "./ContentWrapper.css";

const ContentWrapper = props => (
  <div className="content-wrapper">{props.children}</div>
);

export default ContentWrapper;
