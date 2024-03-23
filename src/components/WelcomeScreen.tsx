import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../store/slice/gameSlice";
import styles from "../styles/WelcomeScreen.module.css";

const WelcomeScreen = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addName(name));
  };

  return (
    <div className={styles.container}>
      <div className={styles.form__container}>
        <h1>Hang the wise man</h1>
        <p>
          Welcome to Hang the wise man game! Please enter your name to continue
        </p>
        <form onSubmit={handleSubmit} className={styles.name__form}>
          <input
            type="text"
            placeholder="Enter your name here"
            value={name}
            onChange={handleInput}
          />
          <button type="submit">Submit your name</button>
        </form>
      </div>
      <div className={styles.img__container}>
        <img
          src="./hangman.jpg"
          alt=""
          width={250}
          className={styles.hangman__vector}
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
