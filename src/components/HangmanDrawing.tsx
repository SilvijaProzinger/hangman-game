import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/HangmanDrawing.module.css";
import { drawing } from "../constants/hangman";

const HangmanDrawing = () => {
  const errors = useSelector((state: RootState) => state.game.errors);

  return (
    <div className={styles.container}>
      <div className={styles.hangman}>{drawing.slice(0, errors)}</div>
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          right: '220px',
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "220px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
