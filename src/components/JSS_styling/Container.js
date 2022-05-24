import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    // color: "black",
    backgroundColor: (data) => data.primaryColor,
  },
});

export const Container = (props) => {
  const classes = styles({ primaryColor: "red" });
  return (
    <div className={classes.container}>
      <h1>Test Container 1222</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel officia
        obcaecati corrupti pariatur molestiae fugit consequatur quas tempore
        quod ipsam?
      </p>
    </div>
  );
};

