class TriviaGame {
  // hasStarted = false;
  // currentQuestion;
  // questions;

  constructor() {

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