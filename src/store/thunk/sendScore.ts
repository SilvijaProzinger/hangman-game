import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { calculateScore } from "../../utilities/calculateScore";
import { setFinalScore } from "../slice/gameSlice";
import { GamePostData } from "../../types/types";

const highscoreUrl = process.env.REACT_APP_HIGHSCORE_API_URL ?? "";

// define the thunk that calls score calculation method and sends player info to API
export const sendScore = createAsyncThunk(
  "game/sendScore",
  async (_, { getState, dispatch }) => {
    try {
      // call the helper function to calculate the score
      const {
        quote,
        charsToGuess,
        name,
        errors,
        finalTime,
      } = (getState() as RootState).game;
      const score = calculateScore(
        quote.length,
        charsToGuess.length,
        errors,
        finalTime
      );
      console.log("FINAL SCORE", score);
      dispatch(setFinalScore(score));

      // prepare data for POST request
      const postData: GamePostData = {
        quoteId: 123, //to add
        length: quote.length,
        uniqueCharacters: charsToGuess.length,
        userName: name,
        errors: errors,
        duration: finalTime,
      };

      const response = await axios.post(highscoreUrl, postData);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
