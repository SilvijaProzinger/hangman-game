import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuoteToGuess } from "../store/gameSlice";
import Quote from "./Quote";
import Header from "./Header";
import useFetch from "../hooks/useFetch";

const Game = () => {
  const quoteUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";

  const { data, isLoading, error, refetch } = useFetch(quoteUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setQuoteToGuess(data.content));
    }
  }, [data, dispatch]);

  return (
    <>
      <Header />
      <Quote data={data} isLoading={isLoading} error={error} />
      <button onClick={refetch}>Restart the game</button>
    </>
  );
};

export default Game;
