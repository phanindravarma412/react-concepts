import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer useeffect was called");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    // return () => setCount(0);
  });
  return <div>I have rendered {count} times</div>;
};

export default Timer;
