import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuoteToGuess, resetGame } from "../store/slice/gameSlice";
import { AppDispatch, RootState } from "../store/store";
import Quote from "./Quote";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import Keyboard from "./Keyboard";
import PlayerCurrentScore from "./PlayerCurrentStatus";
import { QuoteResponse } from "../types/types";
import { sendScore } from "../store/thunk/sendScore";
import { calculateScore } from "../utilities/calculateScore";

const quoteUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";

const Game = () => {
  const { data, isLoading, error, refetch } = useFetch(quoteUrl) 
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(
    (state: RootState) => state.game.status
  )

  /*const charsToGuess = useSelector((state: RootState) => state.game.charsToGuess);
  const errors = useSelector((state: RootState) => state.game.errors);
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

  //const isGameWon = charsToGuess.every((letter) => guessedLetters.includes(letter.toLowerCase()));*/

  //save fetched quote to state
  useEffect(() => {
    if (data) {
      console.log(data);

      //trim empty spaces and special characters from quote 
      const quoteLettersOnly = (data as QuoteResponse).content 
        .replace(/[^a-zA-Z\s]/g, "")
        .replace(/ /g, "")
        .split("");
      dispatch(setQuoteToGuess(quoteLettersOnly));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (status === 'won'){
      dispatch(sendScore())
    }
  },[status, dispatch])

  //check if the game is won or lost
  /*useEffect(() => {
    console.log(isGameWon)
    if (errors >= 7 || isGameWon) {
      const result = isGameWon ? "won" : "lost";
      dispatch(finishGame(result));
      console.log(result);
    }
  }, [dispatch, errors, isGameWon]);*/

  useEffect(() => {
    console.log(status)
  },[status])

  const handleReset = () => {
    refetch();
    dispatch(resetGame('restart'));
  };

  return (
    <>
      <Header />
      <Quote data={data as QuoteResponse} isLoading={isLoading} error={error} />
      <PlayerCurrentScore />
      <button onClick={handleReset}>Restart the game</button>
      <Keyboard />
    </>
  );
};

export default Game;
