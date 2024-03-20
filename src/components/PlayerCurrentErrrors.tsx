import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PlayerCurrentError = () => {
  const errors = useSelector((state: RootState) => state.game.errors);

  return <p>Errors: {errors}/7 </p>;
};

export default PlayerCurrentError;
