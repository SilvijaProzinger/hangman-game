import { useEffect, useRef, useState } from "react";
import axios from "axios";

type QuoteResponse = {
  author: string;
  content: string;
  length?: string;
};

const useFetch = (url: string) => {
  const [data, setData] = useState<QuoteResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isInitalized = useRef(false); 

  useEffect(() => {
    //add ref to stop useEffect from running twice in a row in strict mode
    if (!isInitalized.current) { 
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(url);
          console.log(response);
          setData(response.data);
        } catch {
          console.log(error);
          setError(error);
        }
        setIsLoading(false);
      };
      fetchData();
      isInitalized.current = true;
    }
  }, [url, error]);
  return { data, error, isLoading };
};

export default useFetch;
