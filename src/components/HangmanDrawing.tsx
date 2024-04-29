import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/HangmanDrawing.module.css";
import { drawing } from "../constants/hangman";

const HangmanDrawing = () => {
  const errors = useSelector((state: RootState) => state.game.errors);
  const [showHangman, setShowHangman] = useState(false)

  useEffect(() => {
    setShowHangman(true)
  },[])

  return (
    <div className={`${styles.container} ${showHangman ? styles.visible : ''}`}>
      <div className={styles.hangman}>
        {drawing.slice(0, errors).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className={styles.hangman__noose} />
      <div className={styles.hangman__gallows__right} />
      <div className={styles.hangman__gallows__left} />
    </div>
  );
};

export default HangmanDrawing;
