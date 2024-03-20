import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuoteToGuess, resetGame, finishGame } from "../store/gameSlice";
import { RootState } from "../store/store";
import Quote from "./Quote";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import Keyboard from "./Keyboard";
import PlayerCurrentScore from "./PlayerCurrentScore";

const quoteUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";

const Game = () => {
  const { data, isLoading, error, refetch } = useFetch(quoteUrl);
  const dispatch = useDispatch();

  const charsToGuess = useSelector((state: RootState) => state.game.charsToGuess);
  const errors = useSelector((state: RootState) => state.game.errors);
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

  const isGameWon = charsToGuess.every((letter) => guessedLetters.includes(letter.toLowerCase()));

  //save fetched quote to state
  useEffect(() => {
    if (data) {
      console.log(data);

      //trim empty spaces and special characters from quote 
      const quoteLettersOnly = data.content
        .replace(/[^a-zA-Z\s]/g, "")
        .replace(/ /g, "")
        .split("");
      dispatch(setQuoteToGuess(quoteLettersOnly));
    }
  }, [data, dispatch]);

  //check if the game is won or lost
  useEffect(() => {
    console.log(isGameWon)
    if (errors >= 7 || isGameWon) {
      const result = isGameWon ? "won" : "lost";
      dispatch(finishGame(result));
      console.log(result);
    }
  }, [dispatch, errors, isGameWon]);

  const handleReset = () => {
    refetch();
    dispatch(resetGame());
  };

  return (
    <>
      <Header />
      <Quote data={data} isLoading={isLoading} error={error} />
      <PlayerCurrentScore />
      <button onClick={handleReset}>Restart the game</button>
      <Keyboard />
    </>
  );
};

export default Game;
