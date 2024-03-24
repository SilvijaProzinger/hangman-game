import { addGuess, finishGame } from "../slice/gameSlice";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { RootState } from "../store";

const gameStatusMiddleware = createListenerMiddleware();

// create a listener middleware so that the game status state gets updated when the player makes more than 6 errors or wins the game
gameStatusMiddleware.startListening({
  actionCreator: addGuess,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const isGameLost = state.game.errors >= 6;
    const isGameWon = state.game.charsToGuess.every((letter) =>
      state.game.guessedLetters.includes(letter.toLowerCase())
    );
    if (isGameWon || isGameLost) {
      listenerApi.dispatch(finishGame(isGameWon ? "won" : "lost"));
    }
  },
});

export default gameStatusMiddleware;
