import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuoteToGuess,
  resetGame,
  setQuoteId,
} from "../store/slice/gameSlice";
import { AppDispatch, RootState } from "../store/store";
import useFetch from "../hooks/useFetch";
import { QuoteResponse } from "../types/types";
import { sendScore } from "../store/thunk/sendScore";
import Quote from "./Quote";
import Header from "./Header";
import Keyboard from "./Keyboard";
import PlayerStatus from "./PlayerStatus";
import HangmanDrawing from "./HangmanDrawing";
import styles from '../styles/Game.module.css';

const quoteUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";

const Game = () => {
  const { data, isLoading, error, refetch } = useFetch(quoteUrl);
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.game.status);

  /*const charsToGuess = useSelector((state: RootState) => state.game.charsToGuess);
  const errors = useSelector((state: RootState) => state.game.errors);
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

  //const isGameWon = charsToGuess.every((letter) => guessedLetters.includes(letter.toLowerCase()));*/

  //save fetched quote to state
  useEffect(() => {
    if (data) {
      console.log("DATA", data);

      //trim empty spaces and special characters from quote
      const quoteLettersOnly = (data as QuoteResponse).content
        .replace(/[^a-zA-Z\s]/g, "")
        .replace(/ /g, "")
        .split("");
      dispatch(setQuoteToGuess(quoteLettersOnly));
      dispatch(setQuoteId((data as QuoteResponse)._id));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (status === "won") {
      dispatch(sendScore());
    }
  }, [status, dispatch]);

  //check if the game is won or lost
  /*useEffect(() => {
    console.log(isGameWon)
    if (errors >= 7 || isGameWon) {
      const result = isGameWon ? "won" : "lost";
      dispatch(finishGame(result));
      console.log(result);
    }
  }, [dispatch, errors, isGameWon]);*/

  const handleReset = () => {
    refetch();
    dispatch(resetGame("restart"));
  };

  return (
    <div>
      <Header />
      <div>
        <HangmanDrawing />
        <Quote
          data={data as QuoteResponse}
          isLoading={isLoading}
          error={error}
        />
        <PlayerStatus />
        <button onClick={handleReset}>Restart the game</button>
        <Keyboard />
      </div>
    </div>
  );
};

export default Game;
