import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    padding: (props) => {
      console.log("CSS props **********");
      console.log(props.spacing);
      return props.spacing;
    },
    backgroundColor: (props) => props.backgroundColor,
    border: "none",
  },
  myLabel: (props) => ({
    display: "block",
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
  }),
});

const DynamicStyling = (props) => {
  const classes = useStyles(props);

  console.log(props);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{props.children}</span>
    </button>
  );
};

export default DynamicStyling;
