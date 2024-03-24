import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PlayerResult = () => {
  const status = useSelector((state: RootState) => state.game.status);

  const playerWon = (
    <p>
      <strong>You won!</strong>
      <Link to="/highscores"> Click here to view high scores table</Link>
    </p>
  );
  const playerLost = (
    <p>
      <strong>You lost!</strong> Restart the game to play again.
    </p>
  );
  return <> {status === "won" ? playerWon : playerLost}</>;
};

export default PlayerResult;
