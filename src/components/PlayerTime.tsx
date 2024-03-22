import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { formatTime } from "../utilities/timeFormatter";
import { useDispatch } from "react-redux";
import { setFinalTime } from "../store/slice/gameSlice";

const PlayerTime = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.game.status);

  const [currentTime, setCurrentTime] = useState(0);
  const isRunning = status === "start" || status === "restart";
  const gameCompleted = status === "won" || status === "lost";

  useEffect(() => {
    const setupInterval = () => {
      let intervalId: NodeJS.Timeout | undefined;

      if (isRunning) {
        intervalId = setInterval(() => setCurrentTime(currentTime + 1), 1);
      }

      if (gameCompleted) dispatch(setFinalTime(currentTime));
      return intervalId;
    };

    let intervalId = setupInterval();

    return () => clearInterval(intervalId);
  }, [isRunning, gameCompleted, currentTime, dispatch, status]);

  useEffect(() => {
    const resetTime = () => {
      setCurrentTime(0);
    };
    if (status === "restart") resetTime();
  }, [status]);

  return <p>Time: {formatTime(currentTime)} </p>;
};

export default PlayerTime;
