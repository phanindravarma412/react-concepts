import React, { useCallback, useEffect, useState } from "react";

const Example = () => {
  const [number, setNumber] = useState(0);

  const [dark, setDark] = useState(true);

  // const getItems = useCallback(
  //   (inc) => {
  //     console.log("GETTING ITEMS WAS CALLED");
  //     return [number + inc, number + inc + 1, number + inc + 2];
  //   },
  //   [number]
  // );

  const getItems = useCallback(
    (inc) => {
      console.log("GETTING ITEMS WAS CALLED");
      return [number + inc, number + inc + 1, number + inc + 2];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(parseInt(e.target.value.length === 0 ? 0 : e.target.value))
        }
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <List getItems={getItems} />
    </div>
  );
};

export default Example;

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};
