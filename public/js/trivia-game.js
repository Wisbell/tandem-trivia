import AppConfig from './config.js';
import TriviaQuestionDto from './trivia-question.js';

export default class TriviaGame {
  currentQuestionIndex = 0;
  currentRoundIndex = 0;
  // TODO: store numeberOfRounds on backend and retrieve from there
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
  // Generate initial question
  start() {
    const goodLuckSection = document.getElementById('startSection');
    const triviaSection = document.getElementById('triviaSection');
    goodLuckSection.classList.add('is-hidden');
    triviaSection.classList.remove('is-hidden');
    this.generateQuestionTemplate();
  }

  // TODO: Rename to generate question template
  generateQuestionTemplate() {
    // get question
    // get current round
    // get current question
    const currentQuestion = this.getCurrentQuestion();
    console.log('currentQuestion', currentQuestion);
    currentQuestion.userAnswer = 'test';
    const test = this.getCurrentQuestion();
    console.log('test', test);

    const triviaQuestionContainer = document.getElementById('trivia-question-container');

    // Add question header
    const questionElement = document.createElement('h3');
    const questionText = document.createTextNode(currentQuestion.question);
    questionElement.appendChild(questionText);
    triviaQuestionContainer.appendChild(questionElement);

    // Add all answers
    const answersContainerElement = document.createElement('div');
    answersContainerElement.classList.add('control');

    currentQuestion.allAnswers.forEach(answer => {
      // Create label element
      const labelElement = document.createElement('label');
      labelElement.classList.add('radio');
      // Create input element
      const inputElement = document.createElement('input');
      inputElement.classList.add('mr-2');
      inputElement.setAttribute('type', 'radio');
      inputElement.setAttribute('name', 'answer');
      // Create span element
      const spanElement = document.createElement('span');
      const spanText = document.createTextNode(answer);
      spanElement.appendChild(spanText);
      // Add input and span elements to label element
      labelElement.appendChild(inputElement);
      labelElement.appendChild(spanElement);
      // Add label element and line break to answersContainer element
      const lineBreak = document.createElement('br');
      answersContainerElement.appendChild(labelElement);
      answersContainerElement.appendChild(lineBreak);
    });

    // Add answersContainer element to main trivia question container element
    triviaQuestionContainer.appendChild(answersContainerElement);
  }

  getCurrentQuestion() {
    return this.rounds[this.currentRoundIndex][this.currentQuestionIndex];
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