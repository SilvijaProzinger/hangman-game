import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import { Response } from "../types/types";

const useGetRequest = (url: string) => {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isInitalized = useRef(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError('There has been an error. Please restart the game or refresh the page.');
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    // add ref to stop useEffect from running twice in a row in strict mode
    if (!isInitalized.current) {
      fetchData();
      isInitalized.current = true;
    }
  }, [url, fetchData, error]);
  return {
    data,
    error,
    isLoading,
    refetch: fetchData // expose refetch to call the fetchData again,
  };
};

export default useGetRequest;
