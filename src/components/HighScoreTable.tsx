import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { AppDispatch } from "../store/store";
import useFetch from "../hooks/useFetch";
import { calculateScore } from "../utilities/calculateScore";
import { formatTime } from "../utilities/timeFormatter";
import {
  HighScoreTableResponse,
  CalculatedHighScoreTable,
} from "../types/types";

const highscoreUrl = process.env.REACT_APP_HIGHSCORE_API_URL ?? "";

const HighScoreTable = () => {
  const { data, isLoading, error } = useFetch(highscoreUrl);

  const [sortedHighScore, setSortedHighscore] = useState<
    CalculatedHighScoreTable[]
  >([]);

  const highscoreDataWithCalculatedScore = useMemo(() => {
    if (data) {
      const calculatedFinalScore = (data as HighScoreTableResponse).map(
        (player) => {
          const { length, uniqueCharacters, errors, duration } = player;
          const finalScore = calculateScore(
            length,
            uniqueCharacters,
            errors,
            duration
          );

          return {
            ...player,
            finalScore: finalScore,
          };
        }
      );
      return calculatedFinalScore;
    } else return [];
  }, [data]);

  useEffect(() => {
    const sortedHighScoreTable = [...highscoreDataWithCalculatedScore].sort(
      (a, b) => b.finalScore - a.finalScore
    );
    setSortedHighscore(sortedHighScoreTable);
  }, [highscoreDataWithCalculatedScore]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Highscore table</h1>
      <p>See other players' highscores.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User name</th>
            <th>Errors</th>
            <th>Length</th>
            <th>Unique Characters</th>
            <th>Duration</th>
            <th>Final Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedHighScore.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.errors}</td>
              <td>{item.length}</td>
              <td>{item.uniqueCharacters}</td>
              <td>{formatTime(item.duration)}</td>
              <td>{item.finalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
