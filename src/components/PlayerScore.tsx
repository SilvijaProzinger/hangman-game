import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PlayerScore = () => {
  const score = useSelector((state: RootState) => state.game.finalScore);

  return <p><strong>Score:</strong> {score > 0 ? score : "0"}</p>;
};

export default PlayerScore;
