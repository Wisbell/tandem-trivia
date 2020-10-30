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

  static fromTriviaQuestion({ id, question, incorrectAnswers, correctAnswer }) {
    return new TriviaQuestionDto(id, question, [...incorrectAnswers, correctAnswer], correctAnswer);
  }
}