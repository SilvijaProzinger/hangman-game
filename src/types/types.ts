export type QuoteResponse = {
  author: string;
  content: string;
  length?: string;
};

export type HighScoreTableResponse = {

}

export type Response = QuoteResponse | HighScoreTableResponse

export type GamePostData = {
  quoteId: number; 
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}