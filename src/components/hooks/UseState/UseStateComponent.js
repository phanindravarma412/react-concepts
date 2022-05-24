import React, { useState } from "react";

const UseStateComponent = () => {
  const name = "Phanindra";
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: name, age: 24 });
  return (
    <div>
      <p>hello</p>
      <button onClick={() => setCount((prevCount) => prevCount + 10)}>
        {count}
      </button>

      <br />

      <button
        onClick={() =>
          setPerson({
            ...person,
            name: person.name === name ? "Phani" : name,
          })
        }
      >
        {person.name}
      </button>

      <br />
      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
        {person.age}
      </button>
    </div>
  );
};

export default UseStateComponent;
