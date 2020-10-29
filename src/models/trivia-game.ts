import { TriviaQuestion } from "./trivia-question";

export class TriviaGame {
  numberOfRounds: number;
  questions: TriviaQuestion[];

  constructor(numberOfRounds: number, questions: object[]) {
    this.numberOfRounds = numberOfRounds;
    this.questions = [];

    questions.forEach(question => {
      this.questions.push(question as TriviaQuestion);
    });
  }
}