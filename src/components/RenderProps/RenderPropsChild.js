import React from "react";

const RenderPropsChild = (props) => {
  return (
    <div>
      <h1>This is child component</h1>
      {props.render("Phanindra", 26)}
    </div>
  );
};

export default RenderPropsChild;
