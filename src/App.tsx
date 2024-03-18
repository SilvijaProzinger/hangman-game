import "./App.css";
import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const name = useSelector((state: RootState) => state.game.name);

  return <>{name ? <Game /> : <WelcomeScreen />}</>;
}

export default App;
