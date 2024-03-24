import "./App.css";
import './styles/colors.module.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  const name = useSelector((state: RootState) => state.game.name);
  
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={name ? <Navigate to="/game" /> : <WelcomeScreen />}
          />
          <Route path="/game" element={name ? <Game /> : <Navigate to="/" />} />
          <Route path="/highscores" element={<HighScoreTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
