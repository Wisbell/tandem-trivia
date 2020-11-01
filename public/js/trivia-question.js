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

  static fromTriviaQuestion({ id, question, incorrectAnswers, correctAnswer }, randomizeAnswers = true) {
    const allAnswers = [...incorrectAnswers, correctAnswer];
    if (randomizeAnswers)
      shuffleArray(allAnswers);
    return new TriviaQuestionDto(id, question, allAnswers, correctAnswer);
  }

  static getRoundScore(questionArray) {
    const numberOfQuestions = questionArray.length;
    let correctAnswers = 0;

    questionArray.forEach(question => {
      if (question.isUserAnswerCorrect())
        correctAnswers++;
    });

    return {
      correctAnswers,
      numberOfQuestions
    }
  }
}