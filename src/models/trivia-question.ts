import { shuffleArray } from "../utility/utility";
import { TriviaData } from "./trivia-data";

/* Class resembling TriviaData but with more descriptive/specific property names */
export class TriviaQuestion {
  readonly id: string;
  readonly question: string;
  readonly incorrectAnswers: string[];
  readonly correctAnswer: string;

  constructor(id: string, question: string, incorrectAnswers: string[], correctAnswer: string) {
    this.id = id;
    this.question = question;
    this.incorrectAnswers = incorrectAnswers;
    this.correctAnswer = correctAnswer;
  }

  static generateTriviaQuestionArray(data: TriviaData[]): TriviaQuestion[] {
    return data.map((triviaData, index) => {
      return new TriviaQuestion(
        index.toString(),
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
    const allAnswers = this.generateAnswerArray()
    shuffleArray(allAnswers);
    return allAnswers;
  }
}