# Hang the wise man - A Hangman game web app

This is Hang the wise man, a clone of popular hangman game. The goal of this game is to guess a quote by a famous person as soon as possible with least possible errors, else the player gets "hanged". This web app was made with React using `create-react-app`, `axios` for HTTP requests and `redux toolkit` for state management. 

## Rules
* The game fetches a quote made by a famous person and the player has to guess it.
* The objective is to avoid hanging by not exceeding more than 6 errors.
* The player can restart the game at any point and fetch a new quote.
* If the player wins, their score is calculated based on the number of errors, time taken, the length of the quote, and the number of unique characters.
* After winning, the player can view the high scores table, which lists other players and their scores.

## How to run

* Clone the repository or download the zip file.
* Inside the downloaded folder open Node.js command prompt
* Run `npm install` to install all the dependencies this project needs
* Run `npm start` to run the web app locally in your browser [http://localhost:3000](http://localhost:3000) 
* To run tests exit the running script and then run `npm test`

