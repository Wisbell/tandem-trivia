import { shuffleArray } from './utlity.js';

export default class TriviaQuestionDto {
  id;               // string
  question;         // string
  allAnswers;       // string[]
  correctAnswer;    // string
  userAnswer;       // string

  constructor(id, question, allAnswers, correctAnswer, userAnswer = '') {
    this.id = id;
    this.question = question;
    this.allAnswers = allAnswers;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  isUserAnswerCorrect() {
    return this.correctAnswer === this.userAnswer;
  }

  static fromTriviaQuestion({ id, question, incorrectAnswers, correctAnswer }) {
    const allAnswers = [...incorrectAnswers, correctAnswer];
    shuffleArray(allAnswers);
    return new TriviaQuestionDto(id, question, allAnswers, correctAnswer);
  }
}