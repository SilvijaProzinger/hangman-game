import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PlayerError from "./PlayerErrors";
import PlayerResult from "./PlayerResult";
import PlayerScore from "./PlayerScore";
import PlayerTime from "./PlayerTime";

const PlayerStatus = () => {
  const status = useSelector((state: RootState) => state.game.status);

  return (
    <div>
      <PlayerError />
      <PlayerTime />
      <PlayerScore />
      {status === "won" || status === "lost" ? <PlayerResult /> : null}
    </div>
  );
};

export default PlayerStatus;
