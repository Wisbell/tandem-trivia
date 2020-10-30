// TODO: Onload set up first round
//        - get data from api
// Use api to get all data, do not pre-populate unless necessary

// const { AppConfig } = require("./config");
import AppConfig from './config.js';
import TriviaQuestionDto from './trivia-question.js';

export default class TriviaGame {
  // hasStarted = false;
  // currentQuestion;
  // questions;

  // Number of rounds for the trivia game, retrieved from DOM id on trivia route
  numberOfRounds = 0;
  // Array of array Trivia Questions
  rounds = [];
  // Allows getting of questions in a randomized order from api
  shuffleQuestions = true;

  constructor() {
    this.init();
  }

  init() {
    this.numberOfRounds = this.parseNumberOfRoundsFromDOM();
    this.generateAllRounds();
  }

  parseNumberOfRoundsFromDOM() {
    return parseInt(document.getElementById('triviaRounds').innerHTML);
  }

  async generateRound() {
    let requestUrl =
      this.shuffleQuestions ? `${AppConfig.triviaApiUrl}?random=true` : AppConfig.triviaApiUrl;
    const response = await fetch(requestUrl);
    const data = await response.json();

    return data.map(triviaQuestion => {
      return TriviaQuestionDto.fromTriviaQuestion(triviaQuestion);
    });
  }

  async generateAllRounds() {
    for (let i = 0; i < this.numberOfRounds; i++) {
      this.rounds.push(await this.generateRound());
    }
    console.log('rounds', this.rounds);
  }

  // Hide start section
  // Display question section
  start() {
    const goodLuckSection = document.getElementById('startSection');
    const triviaSection = document.getElementById('triviaSection');
    goodLuckSection.classList.add('is-hidden');
    triviaSection.classList.remove('is-hidden');
  }

  // Hide current question
  // Show next question if not at the end of the question list
  nextQuestions() {

  }

  enableNextQuestionButton(questionIndex) {

  }
}

// Global class keeps track of game state
// export const Game = new TriviaGame();