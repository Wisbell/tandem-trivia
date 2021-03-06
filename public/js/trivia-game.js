import { TestAppConfig, HerokuAppConfig } from './config.js';
import TriviaQuestionDto from './trivia-question-dto.js';
import { getJsonResponseFromEndPoint, generateElement } from './utility.js';

export default class TriviaGame {
  currentQuestionIndex = 0;
  currentRoundIndex = 0;
  numberOfRounds = 0;
  rounds = []; // Array of array Trivia Questions
  shuffleQuestions = true; // Allows getting of questions in a randomized order from api
  config; // Set on initialization - defaults to TestAppConfig

  constructor(configType = '') {
    if (configType === 'heroku')
      this.config = HerokuAppConfig;
    else
      this.config = TestAppConfig;


    this.init();
  }

  async init() {
    this.numberOfRounds = await this.getNumberOfRounds();
    await this.generateAllRounds();
  }

  async getNumberOfRounds() {
    return await getJsonResponseFromEndPoint(`${this.config.triviaApiUrl}/rounds`);
  }

  async generateRound() {
    let requestUrl =
      this.shuffleQuestions ? `${this.config.triviaApiUrl}?random=true` : this.config.triviaApiUrl;

    const data = await getJsonResponseFromEndPoint(requestUrl);

    return data.map(triviaQuestion => {
      return TriviaQuestionDto.fromTriviaQuestion(triviaQuestion);
    });
  }

  async generateAllRounds() {
    for (let i = 0; i < this.numberOfRounds; i++) {
      this.rounds.push(await this.generateRound());
    }
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

  getTriviaQuestionContainerEl() {
    return document.getElementById('trivia-question-container');
  }

  appendTriviaQuestionContainerEl(elementToAppend) {
    this.getTriviaQuestionContainerEl().appendChild(elementToAppend);
  }

  generateCurrentRoundTemplate() {
    const currentRoundHeader = generateElement('h2', `Current Round: ${this.currentRoundIndex + 1}`);
    this.appendTriviaQuestionContainerEl(currentRoundHeader);
  }

  generateCurrentQuestionTemplate() {
    const currentQuestionHeader = generateElement('h2', `Current Question: ${this.currentQuestionIndex + 1}`);
    this.appendTriviaQuestionContainerEl(currentQuestionHeader);
  }

  generateQuestionTemplate() {
    this.generateCurrentRoundTemplate();
    this.generateCurrentQuestionTemplate();

    const currentQuestion = this.getCurrentQuestion();

    // Add question header
    const questionElement = generateElement('h3', currentQuestion.question);
    this.appendTriviaQuestionContainerEl(questionElement);

    // Add all answers
    const answersContainerElement = generateElement('div', '', ['control']);

    currentQuestion.allAnswers.forEach(answer => {
      // Create label element
      const labelElement = generateElement('label', '', ['radio']);
      // NOTE: .bind(this) binds 'this' instance of TriviaGame instead of the label element 'this'
      labelElement.addEventListener('click', this.enableSubmitAnswerButton.bind(this));
      // Create input element
      const inputElement = generateElement(
        'input',
        '',
        ['mr-2'],
        [{ name: 'type', value: 'radio' }, { name: 'name', value: 'answer' }, { name: 'value', value: answer }]
      );
      // Create span element
      const spanElement = generateElement('span', answer, ['answer']);
      // Add input and span elements to label element
      labelElement.appendChild(inputElement);
      labelElement.appendChild(spanElement);
      // Add label element and line break to answersContainer element
      const lineBreak = document.createElement('br');
      answersContainerElement.appendChild(labelElement);
      answersContainerElement.appendChild(lineBreak);
    });

    // Add answersContainer element to main trivia question container element
    this.appendTriviaQuestionContainerEl(answersContainerElement);

    const submitAnswerButton = generateElement('button', 'Submit', ['button', 'is-primary', 'mt-3']);
    // NOTE: .bind(this) binds 'this' instance of TriviaGame instead of the submit answer's button 'this'
    submitAnswerButton.addEventListener('click', this.answerQuestion.bind(this));
    // Disable submit button until an answer is chosen
    submitAnswerButton.disabled = true;
    submitAnswerButton.setAttribute("id", "submitAnswerButton");
    this.appendTriviaQuestionContainerEl(submitAnswerButton);
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
    // Set answer
    const currentQuestion = this.getCurrentQuestion();
    const currentAnswer = this.getUserAnswer();
    currentQuestion.userAnswer = currentAnswer;
    this.displayAnswer();
  }

  displayAnswer() {
    // Hide submit button
    const submitAnswerButton = document.getElementById('submitAnswerButton');
    submitAnswerButton.classList.add('is-hidden');

    // Disable radio inputs
    const inputElements = document.getElementsByName('answer');
    for (let input of inputElements) {
      input.disabled = true;
    }

    // Show correct/incorrect answers by color
    const currentQuestion = this.getCurrentQuestion();
    const answers = document.getElementsByClassName('answer');

    for (let answer of answers) {
      if (answer.textContent !== currentQuestion.correctAnswer)
        answer.classList.add('has-text-danger');
      else
        answer.classList.add('has-text-success');
    }

    // Show result message
    const resultElement = generateElement('h4', '', ['mt-3']);

    if (currentQuestion.isUserAnswerCorrect())
      resultElement.appendChild(document.createTextNode('You got it!'));
    else
      resultElement.appendChild(document.createTextNode('You\'ll get it next time!'));

    this.appendTriviaQuestionContainerEl(resultElement);

    // Show next question button or show round score
    if (this.isRoundOver()) {
      // Create and add see score button
      const showRoundScoreButton = generateElement('button', 'See Round Score', ['button', 'is-success']);
      showRoundScoreButton.addEventListener('click', this.displayRoundScore.bind(this));

      this.appendTriviaQuestionContainerEl(showRoundScoreButton);
    } else {
      // Create and add next question button
      const nextQuestionButton = generateElement('button', 'Next Question', ['button', 'is-link']);
      nextQuestionButton.addEventListener('click', this.displayNextQuestion.bind(this));

      this.appendTriviaQuestionContainerEl(nextQuestionButton);
    }
  }

  displayNextQuestion() {
    this.clearTriviaQuestionContainer();
    this.currentQuestionIndex++;
    this.generateQuestionTemplate();
  }

  displayNextRound() {
    this.clearTriviaQuestionContainer();
    this.currentRoundIndex++;
    this.currentQuestionIndex = 0;
    this.generateQuestionTemplate();
  }

  generateRoundScoreTemplate() {
    // Create and add header
    const roundScoreHeaderElement = generateElement('h4', 'Nice Work!', ['has-text-info']);
    this.appendTriviaQuestionContainerEl(roundScoreHeaderElement);

    // Create score
    // NOTE: roundScore = { correctAnswers, numberOfQuestions }
    const roundScore = TriviaQuestionDto.getRoundScore(this.rounds[this.currentRoundIndex]);
    const scoreElement = generateElement('h4', `You got ${roundScore.correctAnswers}/${roundScore.numberOfQuestions}`);
    this.appendTriviaQuestionContainerEl(scoreElement);

  }

  displayRoundScore() {
    this.clearTriviaQuestionContainer();
    this.generateRoundScoreTemplate();

    // Show next round button or go to home page button
    if (this.allRoundsHaveBeenCompleted()) {
      const goToHomePageButtonElement = generateElement(
        'a',
        'All done! Go To Home Page.',
        ['button', 'is-danger'],
        [{ name: 'href', value: '/' }]
      );
      this.appendTriviaQuestionContainerEl(goToHomePageButtonElement);
    } else {
      const nextRoundButton = generateElement('button', 'Next Round', ['button', 'is-link']);
      nextRoundButton.addEventListener('click', this.displayNextRound.bind(this));
      this.appendTriviaQuestionContainerEl(nextRoundButton);
    }
  }

  clearTriviaQuestionContainer() {
    const triviaQuestionContainer = document.getElementById('trivia-question-container');
    while (triviaQuestionContainer.firstChild) {
      triviaQuestionContainer.removeChild(triviaQuestionContainer.lastChild);
    }
  }

  getCurrentQuestion() {
    return this.rounds[this.currentRoundIndex][this.currentQuestionIndex];
  }

  getUserAnswer() {
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

  isRoundOver() {
    const currentRoundLength = this.rounds[this.currentRoundIndex].length;

    if (currentRoundLength === this.currentQuestionIndex + 1)
      return true;
    else
      return false;
  }

  allRoundsHaveBeenCompleted() {
    if (this.rounds.length === this.currentRoundIndex + 1)
      return true;
    else
      return false;
  }
}
