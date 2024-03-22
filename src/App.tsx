import "./App.css";
import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  const name = useSelector((state: RootState) => state.game.name);
  const state = useSelector((state:RootState) => state);

  useEffect(() => {
    console.log(state)
  },[state])

  return <>{name ? <Game /> : <HighScoreTable />}</>;
}

export default App;
