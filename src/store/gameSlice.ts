import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface gameState {
  name: string;
  quote: string;
  guessedLetters: string[];
  errors: number;
  score: number;
}

const initialState: gameState = {
  name: "",
  quote: "",
  guessedLetters: [],
  errors: 0,
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.guessedLetters = initialState.guessedLetters;
      state.errors = initialState.errors;
      state.score = initialState.score;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setQuoteToGuess: (state, action: PayloadAction<string>) => {
      state.quote = action.payload;
    },
    addGuess: (state, action: PayloadAction<string>) => {
      state.guessedLetters.push(action.payload);
      if (!state.quote.includes(action.payload)) {
        state.errors += 1;
      }
    },
  },
});

export const {
  resetGame,
  addName,
  setQuoteToGuess,
  addGuess,
} = gameSlice.actions;

export default gameSlice.reducer;
