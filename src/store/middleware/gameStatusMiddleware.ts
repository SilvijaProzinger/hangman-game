import { addGuess, finishGame } from '../slice/gameSlice';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

const gameStatusMiddleware = createListenerMiddleware()

gameStatusMiddleware.startListening({
  actionCreator: addGuess,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const isGameWon = state.game.charsToGuess.every((letter) => state.game.guessedLetters.includes(letter.toLowerCase()));
    if (isGameWon || state.game.errors >= 7) {
      listenerApi.dispatch(finishGame(isGameWon ? 'won' : 'lost'));
    }
  },
})

export default gameStatusMiddleware
