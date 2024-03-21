export const calculateScore = (
  l: number,
  u: number,
  e: number,
  t: number
): number => {
  //add bonus points per importance
  /*const quoteLengthBonus = 15,
    uniqueLettersBonus = 10,
    errorsBonus = -5,
    solvingTimeBonus = -1;

  // calculation based on bonus points
  let score =
    l * quoteLengthBonus +
    u * uniqueLettersBonus +
    e * errorsBonus +
    t * solvingTimeBonus;

  // ensure that the score is positive
  score = Math.max(0, score);

  return score;*/
  console.log(l,u,e,t)

  let baseScore = 100 / (1 + e);

  const quoteLengthBonus = l * 15;
  const uniqueLettersBonus = u * 10;
  const solvingTimePenalty = (t / 1000) * 1;

  let finalScore =
    baseScore + quoteLengthBonus + uniqueLettersBonus - solvingTimePenalty;

  return Math.max(0, finalScore);
};
