import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const local = useLocalStorage();

  const [value, setValue] = useState("");

  const getLocalStorage = (key) => {
    console.log("************  LOCAL DATA AVAILABLE ************");
    console.log("key", key);
    console.log("value", local.getStorageItemValue(key));
    const item = local.getStorageItemValue(key) === null ? "No data" : local.getStorageItemValue(key);
    setValue(item);
  };

  const updateLocalStorage = (key, value) => {
    console.log("updateLocalStorage", key, value);

    local.updateStorageItemValue(key, value);
  };

  const removeLocalStorage = (key) => {
    local.removeStorageItem(key);
  };
  return (
    <div>
      <button onClick={() => getLocalStorage("name")}>Get Local</button> <br />
      <br />
      <button onClick={() => updateLocalStorage("name", "phani")}>
        Update Local
      </button>{" "}
      <br />
      <br />
      <button onClick={() => removeLocalStorage("name")}>
        Remove Local
      </button>{" "}
      <br />
      <br />
      {value}
    </div>
  );
};

export default LocalStorage;
