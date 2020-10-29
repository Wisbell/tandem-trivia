export class TriviaQuestion {
  question: string;
  incorrectAnswers: string[];
  correctAnswer: string;

  constructor(question: string, incorrectAnswers: string[], correctAnswer: string) {
    this.question = question;
    this.incorrectAnswers = incorrectAnswers;
    this.correctAnswer = correctAnswer;
  }
}