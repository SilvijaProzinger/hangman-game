import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../store/gameSlice";

const WelcomeScreen = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    dispatch(addName(name));
  };

  return (
    <div>
      <h1>Hang the wise man</h1>
      <p>
        Welcome to Hang the wise man game! Please enter your name to continue
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name here"
          value={name}
          onChange={handleInput}
        />
        <button type="submit">Submit your name</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;