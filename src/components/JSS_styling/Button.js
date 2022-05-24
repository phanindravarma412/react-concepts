import React from "react";
import { useStyles } from "./Button.styles";

const Button = (props) => {
  const classes = useStyles();
  return (
    <button className={classes.button}>
      <span className={classes.label}>{props.children}</span>
    </button>
  );
};

export default Button;
