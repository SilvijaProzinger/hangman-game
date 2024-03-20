import PlayerCurrentError from "./PlayerCurrentErrrors";
import PlayerCurrentTime from "./PlayerCurrentTime";

const PlayerCurrentScore = () => {
  return (
    <div>
      <PlayerCurrentError />
      <PlayerCurrentTime />
    </div>
  );
};

export default PlayerCurrentScore;
