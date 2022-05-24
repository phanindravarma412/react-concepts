import React from "react";

import RenderPropsChild from "./RenderPropsChild";

const RenderPropsParent = () => {
  return (
    <div>
      This is a parent render component
      <RenderPropsChild
        render={(name, age) => (
          <div>
            <h1>{name}</h1>

            <h3>{age}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropsParent;
