import React from "react";

import { useStyles } from "./PrimaryButton.styles";

const PrimaryButton = (props) => {
  console.log("PRIMARY BUTTON");
  console.log(props.color);
  const classes = useStyles(props);
  return (
    <button onClick={props.onClick} className={classes.myButton}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
