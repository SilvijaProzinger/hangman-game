import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuoteToGuess, resetGame } from "../store/gameSlice";
import Quote from "./Quote";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import Keyboard from "./Keyboard";
import PlayerCurrentScore from "./PlayerCurrentScore";

const Game = () => {
  const quoteUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";

  const { data, isLoading, error, refetch } = useFetch(quoteUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      const quoteToGuess = data.content.replace(/[^a-zA-Z\s]/g, ""); //set state so that the user doesn't have to guess special characters
      dispatch(setQuoteToGuess(quoteToGuess));
    }
  }, [data, dispatch]);

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
