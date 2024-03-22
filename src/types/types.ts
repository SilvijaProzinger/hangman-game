export type QuoteResponse = {
  author: string;
  _id: string;
  content: string;
  length?: string;
};

type HighScoreTableItem = {
  duration: number;
  errors: number;
  id: number;
  length: number;
  quoteId: string;
  uniqueCharacters: number;
  userName: string;
};

export type HighScoreTableResponse = HighScoreTableItem[];

export type Response = QuoteResponse | HighScoreTableResponse;

export type GamePostData = {
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
};

export type CalculatedHighScoreTable = {
  finalScore: number;
  duration: number;
  errors: number;
  id: number;
  length: number;
  quoteId: string;
  uniqueCharacters: number;
  userName: string;
};

export type HangmanDrawingProps = {
  numberOfGuesses: number;
};
