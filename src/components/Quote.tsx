import { QuoteResponse } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/Quote.module.css";

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
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.container}>{error}</p>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.quote__letters__container}>
            {data.content.split("").map((letter, index) => {
              const isLetter = /[a-zA-Z]/.test(letter); //check if character is letter so it can be hidden
              return (
                <span
                  className={
                    isLetter ? styles.quote__char : styles.quote__not__char
                  }
                  key={index}
                >
                  {isLetter ? (
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
