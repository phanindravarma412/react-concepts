import React, { useReducer } from "react";

const initialPeople = [
  {
    id: 1,
    name: "Phanindra",
    age: 24,
  },
  {
    id: 2,
    name: "Phani",
    age: 20,
  },
  {
    id: 3,
    name: "Varma",
    age: 16,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return state.map((person) => {
        if (person.id === action.id) {
          return { ...person, name: action.name };
        } else {
          return person;
        }
      });
    case "AGE":
      return state.map((person) => {
        if (person.id === action.id) {
          return { ...person, age: person.age++ };
        } else {
          return person;
        }
      });
    default:
      return state;
  }
};

const PeopleData = () => {
  const [people, dispatch] = useReducer(reducer, initialPeople);

  const nameClickHandler = (id, name) => {
    dispatch({ type: "NAME", id: id, name: name });
  };

  const ageClickHandler = (id) => {
    dispatch({ type: "AGE", id: id });
  };

  const peopleWidget = people.map((person) => (
    <div key={person.id}>
      <button onClick={() => nameClickHandler(person.id, "xyzz")}>
        {person.name}
      </button>{" "}
      <br /> <br />
      <button onClick={() => ageClickHandler(person.id)}>{person.age}</button>
      <br />
      <br />
    </div>
  ));
  return <div>{peopleWidget}</div>;
};

export default PeopleData;
