import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
