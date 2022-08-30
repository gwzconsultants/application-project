import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchApi = useCallback(async () => {
    setPending(true);
    setError(null);
    try {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setData(data);
    } catch (error) {
      setPending(false);
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return { pending, error, data };
};
export default useFetch;
