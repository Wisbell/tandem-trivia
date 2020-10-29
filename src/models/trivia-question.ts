import { shuffleArray } from "src/utility/utility";
import { TriviaData } from "./trivia-data";

/* Class resembling TriviaData but with more descriptive/specific property names */
export class TriviaQuestion {
  readonly question: string;
  readonly incorrectAnswers: string[];
  readonly correctAnswer: string;

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

  // Combines correctAnswer and incorrectAnswers into a single array
  generateAnswerArray(): string[] {
    return [...this.incorrectAnswers, this.correctAnswer];
  }

  // https://stackoverflow.com/a/12646864
  // Gets incorrect and correct answers and returns them in a random order
  randomizeAnswers() {
    return shuffleArray(this.generateAnswerArray());
  }
}