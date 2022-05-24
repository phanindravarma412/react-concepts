import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  container: {
    backgroundColor: (theme) =>{
      console.log("************  THEME ***********");
      console.log(theme);
      return "yellow";
    },

    
    // backgroundColor: (props) => {
    //   console.log("PROPS");
    //   console.log(props.backgroundColor);

    //   return "red";
    // },
   
   
    color: "white",
  },
});
