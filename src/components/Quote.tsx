import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Quote = () => {
  const { data, isLoading, error } = useFetch("http://api.quotable.io/random");

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {data && (
        <div>
          <span>{data.content}</span>
          <p>- {data.author}</p>
        </div>
      )}
    </>
  );
};

export default Quote;
