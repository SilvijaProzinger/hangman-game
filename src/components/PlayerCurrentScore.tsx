import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PlayerCurrentScore = () => {
  const errors = useSelector((state: RootState) => state.game.errors);
  return (
    <div>
      <p>Errors: {errors}/7 </p>
      <p>Time:</p>
    </div>
  );
};

export default PlayerCurrentScore;
