import React, { useState } from "react";

import useFetch from "../../hooks/useFetch";

const AxiosExample = () => {
  const BASE_URL = "https://inshorts.deta.dev/news?category=science";

  const NEW_BASE_URL =
    "https://demo.divami.com/exlbackenddev/reports/user-2/NEW/?filters={%22offset%22:0,%22limit%22:5,%22search%22:%22%22}";
  const { data, loading, error } = useFetch(NEW_BASE_URL);

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => console.log("Clicked")}>{count}</button>

      <div onClick={() => setCount((prevCount) => prevCount + 1)}>
        Hello test div
      </div>

      <h1 onClick={() => setCount((prevCount) => prevCount + 1)}>{count}</h1>
      <h1> AxiosExample </h1>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error : Something went wrong</h3>}
      {/* <div>
        <pre>{JSON.stringify(data.list, undefined, 2)}</pre>
      </div> */}

      {data?.list?.map((item) => (
        <h2 key={item.summary.caseId}>{item.summary.caseId}</h2>
      ))}
    </div>
  );
};

export default AxiosExample;
