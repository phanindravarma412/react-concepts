import React, { createContext } from "react";

import Component1 from "./Component1";

export const UserContext = createContext();

const MainComponent = () => {
  return (
    <UserContext.Provider value={{ name: "Phanindra", age: 25 }}>
      <div>
        <Component1 />
      </div>
    </UserContext.Provider>
  );
};

export default MainComponent;
