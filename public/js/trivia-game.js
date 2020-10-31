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

  generateQuestionTemplate() {
    const currentQuestion = this.getCurrentQuestion();
    console.log('currentQuestion', currentQuestion); // Remove this

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
      // NOTE: .bind(this) binds 'this' instance of TriviaGame instead of the label element 'this'
      labelElement.addEventListener('click', this.enableSubmitAnswerButton.bind(this));
      // Create input element
      const inputElement = document.createElement('input');
      inputElement.classList.add('mr-2');
      inputElement.setAttribute('type', 'radio');
      inputElement.setAttribute('name', 'answer');
      inputElement.setAttribute('value', answer);
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

    // Create and add submit answer button to main trivia question container element
    const submitAnswerButton = document.createElement('button');
    const submitAnswerButtonText = document.createTextNode("Submit")
    submitAnswerButton.classList.add('button', 'is-primary', 'mt-3');
    submitAnswerButton.appendChild(submitAnswerButtonText);
    // NOTE: .bind(this) binds 'this' instance of TriviaGame instead of the submit answer's button 'this'
    submitAnswerButton.addEventListener('click', this.answerQuestion.bind(this));
    // Disable submit button until an answer is chosen
    submitAnswerButton.disabled = true;
    submitAnswerButton.setAttribute("id", "submitAnswerButton");
    triviaQuestionContainer.appendChild(submitAnswerButton);
  }

  enableSubmitAnswerButton() {
    const submitAnswerButton = document.getElementById('submitAnswerButton');
    submitAnswerButton.disabled = false;

    // TODO: Remove click event listeners on labels
    // NOTE: https://stackoverflow.com/questions/11565471/removing-event-listener-which-was-added-with-bind
    //      This isn't a big deal for now, but adding this here for possible future updates
    /*
    const labelElements = document.getElementsByTagName('label');
    for (let label of labelElements) {
      // label.removeEventListener('click', this.enableSubmitAnswerButton, true);
    }
    */
  }

  answerQuestion() {
    const currentQuestion = this.getCurrentQuestion();
    const currentAnswer = this.getCurrentAnswer();
    currentQuestion.userAnswer = currentAnswer;
  }

  getCurrentQuestion() {
    return this.rounds[this.currentRoundIndex][this.currentQuestionIndex];
  }

  getCurrentAnswer() {
    const inputElements = document.getElementsByName('answer');
    let answer;

    for (let input of inputElements) {
      if (input.checked) {
        answer = input.defaultValue;
        break;
      }
    }
    return answer;
  }

  // Hide current question
  // Show next question if not at the end of the question list
  // nextQuestions() {

  // }

  // enableNextQuestionButton(questionIndex) {

  // }
}

// Global class keeps track of game state
// export const Game = new TriviaGame();