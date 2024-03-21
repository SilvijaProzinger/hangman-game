export type QuoteResponse = {
  author: string;
  content: string;
  length?: string;
};

export type HighScoreTableResponse = {

}

export type Response = QuoteResponse | HighScoreTableResponse