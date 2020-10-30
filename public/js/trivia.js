// TODO: Onload set up first round
//        - get data from api
// Use api to get all data, do not pre-populate unless necessary



class TriviaGame {
  // hasStarted = false;
  // currentQuestion;
  // questions;
  // Number of rounds for the trivia game, retrieved from DOM id on trivia route
  numberOfRounds; // number
  // Array of array Trivia Questions
  rounds; // [ TriviaQuestion[], TriviaQuestion[] ]
  port = '3000';
  rootUrl = `http://localhost:${this.port}`;
  triviaApiUrl = `${this.rootUrl}/trivia/api`;

  constructor() {
    this.init();
  }

  init() {
    this.numberOfRounds = parseInt(document.getElementById('triviaRounds'));
    // - Generate rounds based on number of rounds set in trivia controller
    this.generateRound();
  }

  // Generate 
  async generateRound(random = null) {
    // Get question list
    const response = await fetch(`${this.triviaApiUrl}?random=true`);
    const data = await response.json();
    console.log('data', data);
  }

  // Hide start section
  // Display question section
  start() {
    console.log('start clicked!');
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
const Game = new TriviaGame();