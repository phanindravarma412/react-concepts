import React, { useState } from "react";

import useFetch from "../../hooks/useFetch";

const AxiosExample = () => {
  const BASE_URL = "https://inshorts.deta.dev/news?category=science";
  const { data, loading, error } = useFetch(BASE_URL);

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
      <h1> AxiosExample </h1>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error : Something went wrong</h3>}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  );
};

export default AxiosExample;
