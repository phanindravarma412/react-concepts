import React, { useState, useRef, useEffect } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");

  const prevName = useRef(" ");

  useEffect(() => {
    console.log("function was called");
    console.log(name);
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
};

export default UseRefHook;
