import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  startTimer,
  stopTimer,
  getCurrentTime,
  formatTime,
  resetTimer,
} from "../utilities/timer";
import { useDispatch } from "react-redux";
import { setFinalTime } from "../store/slice/gameSlice";

const PlayerCurrentTime = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.game.status);

  const [currentTime, setCurrentTime] = useState(0);

  const callTimer = () => {
    startTimer();
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1);
    return interval;
  };

  useEffect(() => {
    if (status === "won" || status === "lost") {
      stopTimer();
      const finalTime = stopTimer();
      dispatch(setFinalTime(finalTime));
    } else if (status === "restart") {
      resetTimer();
      setCurrentTime(0);
      callTimer();
    } else callTimer();
  }, [status, dispatch]);

  return <p>Time: {formatTime(currentTime)} </p>;
};

export default PlayerCurrentTime;
