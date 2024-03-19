import { keys } from "../constants/keys";
import { useDispatch } from "react-redux";
import { addGuess } from "../store/gameSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Keyboard = () => {
  const dispatch = useDispatch();
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

  const handleGuess = (guess: string) => {
    dispatch(addGuess(guess));
  };

  return (
    <div>
      {keys.map((key) => {
        return (
          <button
            key={key}
            onClick={() => handleGuess(key)}
            disabled={guessedLetters.includes(key)}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
