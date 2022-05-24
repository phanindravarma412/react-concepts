import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const [count, setCount] = useState(0);

  const doubleNumber = useMemo(() => {
    slowAdding(count);
  }, [count]);

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={themeStyles}>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>{count}</div>
      <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</button>
      <div>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoHook;

const slowAdding = (num) => {
  console.log("slowAdding was called");
  for (let i = 0; i <= 2000; i++) {
    console.log("Inside slowAdding for loop", i);
  }

  return num * 2;
};
