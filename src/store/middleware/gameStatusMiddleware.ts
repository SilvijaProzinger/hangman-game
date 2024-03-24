import { addGuess, finishGame } from '../slice/gameSlice';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

const gameStatusMiddleware = createListenerMiddleware()

// listen to the game so that when the player makes more than 6 errors or wins the game status is changed
gameStatusMiddleware.startListening({
  actionCreator: addGuess,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const isGameWon = state.game.charsToGuess.every((letter) => state.game.guessedLetters.includes(letter.toLowerCase()));
    if (isGameWon || state.game.errors >= 6) {
      listenerApi.dispatch(finishGame(isGameWon ? 'won' : 'lost'));
    }
  },
})

export default gameStatusMiddleware
