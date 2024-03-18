import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface gameState {
  name: string;
  quote: string;
  guessedLetters: string[];
  errors: number;
  score: number;
  gameStatus: string;
}

const initialState: gameState = {
  name: "",
  quote: "",
  guessedLetters: [],
  errors: 0,
  score: 0,
  gameStatus: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { addName } = gameSlice.actions;

export default gameSlice.reducer;
