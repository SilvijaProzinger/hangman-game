import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PlayerError from "./PlayerErrors";
import PlayerResult from "./PlayerResult";
import PlayerScore from "./PlayerScore";
import PlayerTime from "./PlayerTime";
import styles from '../styles/PlayerStatus.module.css'

const PlayerStatus = () => {
  const status = useSelector((state: RootState) => state.game.status);

  return (
    <div className={styles.container}>
      <PlayerError />
      <PlayerTime />
      <PlayerScore />
      {status === "won" || status === "lost" ? <PlayerResult /> : <p><strong>Status:</strong> playing...</p>}
    </div>
  );
};

export default PlayerStatus;
