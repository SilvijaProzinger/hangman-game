import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/HangmanDrawing.module.css";
import { drawing } from "../constants/hangman";

const HangmanDrawing = () => {
  const errors = useSelector((state: RootState) => state.game.errors);

  return (
    <div className={styles.container}>
      <div className={styles.hangman}>{drawing.slice(0, errors)}</div>
      <div className={styles.hangman__noose} />
      <div className={styles.hangman__gallows__right} />
      <div className={styles.hangman__gallows__left} />
    </div>
  );
};

export default HangmanDrawing;
