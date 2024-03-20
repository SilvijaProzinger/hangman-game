import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slice/gameSlice";
import gameStatusMiddleware from "./middleware/gameStatusMiddleware";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameStatusMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
