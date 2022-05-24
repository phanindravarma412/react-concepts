import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  myButton: {
    margin: {
      top: 16,
    },

    backgroundColor: (theme) => {
      console.log("*********** THEME ***********");
      console.log(theme);
      console.log(theme.color);
      return "red";
    },
    // backgroundColor: (theme) => {
    //   console.log("THEME COLOR");
    //   console.log(theme.data.primaryColor);
    //   return "green";
    // },
    padding: 10,
    color: "white",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
});
