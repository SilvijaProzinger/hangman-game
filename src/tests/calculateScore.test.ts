import { calculateScore } from "../utilities/calculateScore";

describe("calculateScore function", () => {
  // score of the solution with fewer errors should always be higher than for the solution with more errors
  it("should give higher score for fewer errors", () => {
    const scoreWithFewerErrors = calculateScore(10, 5, 2, 1000);
    const scoreWithMoreErrors = calculateScore(10, 5, 5, 1000);
    expect(scoreWithFewerErrors).toBeGreaterThan(scoreWithMoreErrors);
  });

  // given the same number of errors, solutions with larger numbers of unique letters should be scored higher
  it("should give higher score for solutions with more unique letters", () => {
    const scoreWithMoreUniqueLetters = calculateScore(10, 32, 0, 1000);
    const scoreWithLessUniqueLetters = calculateScore(10, 17, 0, 1000);
    expect(scoreWithMoreUniqueLetters).toBeGreaterThan(
      scoreWithLessUniqueLetters
    );
  });

  // given the same number of errors and unique letters, longer solutions should be scored higher
  it("should give higher score for longer solutions", () => {
    const scoreWithLongerSolution = calculateScore(56, 10, 0, 1000);
    const scoreWithShorterSolution = calculateScore(23, 10, 0, 1000);
    expect(scoreWithLongerSolution).toBeGreaterThan(scoreWithShorterSolution);
  });

  // given the same number of errors, unique letters, and quote length, faster solutions should be scored higher
  it("should give higher score for faster solutions", () => {
    const scoreWithFasterSolution = calculateScore(10, 10, 0, 2300);
    const scoreWithSlowerSolution = calculateScore(10, 10, 0, 3000);
    expect(scoreWithFasterSolution).toBeGreaterThan(scoreWithSlowerSolution);
  });
});
