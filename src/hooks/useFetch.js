import { useReducer, useEffect } from "react";
import axios from "axios";

const API_ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case API_ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };

    case API_ACTIONS.FETCH_DATA:
      console.log("********** PAYLOAD DATA**********");
      console.log(action.payload);
      console.log(action.payload.data);
      return { ...state, data: action.payload.data, loading: false };
    case API_ACTIONS.ERROR:
      console.log("********** PAYLOAD ERROR**********");
      console.log(action.payload);
      return { ...state, data: [], error: action.payload };
    default:
      return state;
  }
};

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: API_ACTIONS.API_REQUEST });

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: API_ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: API_ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);
  return state;
}

export default useFetch;
