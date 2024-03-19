import { useEffect } from "react";
import { QuoteResponse } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  data: QuoteResponse | null;
  isLoading: boolean;
  error: string | null;
};

const Quote = ({ data, isLoading, error }: Props) => {
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: 'flex-end'}}>
            {data.content.split("").map((letter, index) => {
              const isNotSpecialChar = /[a-zA-Z]/.test(letter);
              return (
                <span
                  style={{
                    borderBottom: isNotSpecialChar ? "2px solid black" : "none",
                    marginLeft: "3px",
                    display: "flex",
                    width: "15px",
                    height: "20px",
                  }}
                  key={index}
                >
                  {isNotSpecialChar ? (
                    <span
                      style={{
                        display: guessedLetters.includes(letter.toLowerCase())
                          ? "inline-block"
                          : "none",
                        margin: "0 auto",
                      }}
                    >
                      {letter.toUpperCase()} 
                    </span>
                  ) : (
                    letter
                  )}
                </span>
              );
            })}
          </div>
          <p>- {data.author}</p>
        </div>
      )}
    </>
  );
};

export default Quote;
