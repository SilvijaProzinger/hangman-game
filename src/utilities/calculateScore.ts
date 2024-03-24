export const calculateScore = (
  l: number,
  u: number,
  e: number,
  t: number
): number => {
  let baseScore = 100 / (1 + e);

  const quoteLengthBonus = l * 10;
  const uniqueLettersBonus = u * 5;
  const solvingTimePenalty = (t / 1000) * 1;

  let finalScore =
    baseScore + quoteLengthBonus + uniqueLettersBonus - solvingTimePenalty;

  return Math.max(0, Math.round(finalScore));
};
