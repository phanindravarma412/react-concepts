import React, { useContext } from "react";

import { UserContext } from "./MainComponent";

const Component3 = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      Component3
      {userData.name}
      {userData.age}
    </div>
  );
};

export default Component3;
