import { TriviaData } from "./trivia-data";

/* Class resembling TriviaData but with more descriptive/specific property names */
export class TriviaQuestion {
  question: string;
  incorrectAnswers: string[];
  correctAnswer: string;

  constructor(question: string, incorrectAnswers: string[], correctAnswer: string) {
    this.question = question;
    this.incorrectAnswers = incorrectAnswers;
    this.correctAnswer = correctAnswer;
  }

  static generateTriviaQuestionArray(data: TriviaData[]): TriviaQuestion[] {
    return data.map(triviaData => {
      return new TriviaQuestion(
        triviaData.question,
        triviaData.incorrect,
        triviaData.correct
      );
    });
  }
}