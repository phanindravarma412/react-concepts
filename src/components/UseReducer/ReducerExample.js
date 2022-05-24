import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

const initialState = [
  {
    id: 1,
    bikeCompany: "Triumph",
    bikeModal: "Tiger",
    year: "2015",
  },
  {
    id: 2,
    bikeCompany: "Ducati",
    bikeModal: "Scrambler",
    year: "2019",
  },
  {
    id: 3,
    bikeCompany: "BMW",
    bikeModal: "r9t",
    year: "2020",
  },
  {
    id: 4,
    bikeCompany: "Kawasaki",
    bikeModal: "z900",
    year: "2013",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPANY":
      return state.map((bike) => {
        if (bike.id === action.id) {
          return { ...bike, bikeCompany: action.value };
        } else {
          return bike;
        }
      });

    case "MODAL":
      return state.map((bike) => {
        if (bike.id === action.id) {
          return { ...bike, bikeModal: action.value };
        } else {
          return bike;
        }
      });
    case "YEAR":
      return state.map((bike) => {
        if (bike.id === action.id) {
          return { ...bike, year: action.value };
        } else {
          return bike;
        }
      });
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [bikes, dispatch] = useReducer(reducer, initialState);
  const [editActive, setEditActive] = useState(false);
  const [input, setInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [id, setId] = useState();

  const companyClickHandler = (id) => {
    setId(id);
    console.log(id);
    setSelectedType("COMPANY");
    setEditActive((prevState) => !prevState);
  };
  const modalClickHandler = (id) => {
    setId(id);
    setSelectedType("MODAL");
    setEditActive((prevState) => !prevState);
  };
  const yearClickHandler = (id) => {
    setId(id);
    setSelectedType("YEAR");
    setEditActive((prevState) => !prevState);
  };

  const onAddClickHandler = () => {
    console.log("ON ADD CLICKED");
    console.log(selectedType);
    console.log(input);
    console.log(id);
    dispatch({ type: selectedType, id: id, value: input });
  };
  const bikesComponent = bikes.map((bike, index) => (
    <div>
      <h1 onClick={() => companyClickHandler(bike.id)}>{bike.bikeCompany}</h1>
      <h3 onClick={() => modalClickHandler(bike.id)}>{bike.bikeModal}</h3>
      <p onClick={() => yearClickHandler(bike.id)}>{bike.year}</p>
    </div>
  ));
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {bikesComponent}
      </div>
      {editActive && (
        <input placeholder="enter" onChange={(e) => setInput(e.target.value)} />
      )}
      {editActive && <button onClick={onAddClickHandler}>ADD</button>}
    </>
  );
};

export default ReducerExample;
