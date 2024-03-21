import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sendScore } from "../thunk/sendScore";

interface gameState {
  name: string;
  quote: string[];
  charsToGuess: string[];
  guessedLetters: string[];
  errors: number;
  status: string;
  finalTime: number;
  finalScore: number;
  postResponse: string | undefined;
  postError: string | undefined;
}

const initialState: gameState = {
  name: "",
  quote: [],
  charsToGuess: [],
  guessedLetters: [],
  errors: 0,
  status: "start",
  finalTime: 0,
  finalScore: 0,
  postResponse: "",
  postError: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state, action: PayloadAction<string>) => {
      state.guessedLetters = initialState.guessedLetters;
      state.errors = initialState.errors;
      state.status = action.payload;
      state.finalTime = initialState.finalTime;
      state.finalScore = initialState.finalScore;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setQuoteToGuess: (state, action: PayloadAction<string[]>) => {
      state.quote = action.payload;
      //save only unique characters to the state so that the player doesn't have to guess duplicates
      state.charsToGuess = state.quote.filter(
        (letter, index) => state.quote.indexOf(letter.toLowerCase()) === index
      );
    },
    addGuess: (state, action: PayloadAction<string>) => {
      state.guessedLetters.push(action.payload);
      if (!state.quote.includes(action.payload)) {
        state.errors += 1;
      }
    },
    finishGame: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setFinalTime: (state, action: PayloadAction<number>) => {
      state.finalTime = action.payload;
    },
    setFinalScore: (state, action: PayloadAction<number>) => {
      state.finalScore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendScore.fulfilled, (state, action) => {
      state.postResponse = action.payload;
    });
    builder.addCase(sendScore.rejected, (state, action) => {
      state.postError = action.error.message;
    });
  },
});

export const {
  resetGame,
  addName,
  setQuoteToGuess,
  addGuess,
  finishGame,
  setFinalTime,
  setFinalScore,
} = gameSlice.actions;

export default gameSlice.reducer;
