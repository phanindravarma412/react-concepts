import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  button: {
    color: "green",
    border: "none",
    cursor: "pointer",
    backgroundColor: "yellow",
    margin: {
      top: 5,
      right: 10,
      bottom: 5,
      left: 20,
    },

    padding: {
      top: "1rem",
      right: "1rem",
      bottom: "1rem",
      left: "1rem",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  label: {
    fontStyle: "italic",
    fontWeight: 400,
  },
});
