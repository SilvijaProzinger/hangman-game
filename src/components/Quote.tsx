import { useEffect } from "react";
import { QuoteResponse } from "../types/types";

type Props = {
  data: QuoteResponse | null;
  isLoading: boolean;
  error: string | null;
};

const Quote = ({ data, isLoading, error }: Props) => {
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
