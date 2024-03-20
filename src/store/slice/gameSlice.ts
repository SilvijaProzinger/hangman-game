import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface gameState {
  name: string;
  quote: string[];
  charsToGuess: string[];
  guessedLetters: string[];
  errors: number;
  score: number;
  outcome: string;
}

const initialState: gameState = {
  name: "",
  quote: [],
  charsToGuess: [],
  guessedLetters: [],
  errors: 0,
  score: 0,
  outcome: "ongoing",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.guessedLetters = initialState.guessedLetters;
      state.errors = initialState.errors;
      state.outcome = initialState.outcome;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setQuoteToGuess: (state, action: PayloadAction<string[]>) => {
      state.quote = action.payload;
      //save only unique characters to the state so that the player doesn't have to guess duplicates
      state.charsToGuess = state.quote.filter(
        (letter, index) => state.quote.indexOf(letter) === index
      );
    },
    addGuess: (state, action: PayloadAction<string>) => {
      state.guessedLetters.push(action.payload);
      if (!state.quote.includes(action.payload)) {
        state.errors += 1;
      }
    },
    finishGame: (state, action: PayloadAction<string>) => {
      state.outcome = action.payload;
    },
  },
});

export const {
  resetGame,
  addName,
  setQuoteToGuess,
  addGuess,
  finishGame,
} = gameSlice.actions;

export default gameSlice.reducer;
