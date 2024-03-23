import { keys } from "../constants/keys";
import { useDispatch } from "react-redux";
import { addGuess } from "../store/slice/gameSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from '../styles/Keyboard.module.css'

const Keyboard = () => {
  const dispatch = useDispatch();
  const guessedLetters = useSelector(
    (state: RootState) => state.game.guessedLetters
  );

  const handleGuess = (guess: string) => {
    dispatch(addGuess(guess));
  };

  return (
    <div className={styles.container}>
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
