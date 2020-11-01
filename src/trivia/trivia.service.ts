import { Injectable } from '@nestjs/common';
import { TriviaData } from 'src/models/trivia-data';
import { TriviaQuestion } from 'src/models/trivia-question';
import { shuffleArray } from 'src/utility/utility';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

@Injectable()
export class TriviaService {
  // Load trivia data on initialization
  private readonly triviaData: TriviaQuestion[];
  private numberOfTriviaRounds: number;

  constructor() {
    this.triviaData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
    this.numberOfTriviaRounds = 10;
  }

  // Get all questions
  getAllQuestions(random?: boolean): TriviaQuestion[] {
    if (random) {
      const randomizedQuestions = [...this.triviaData];
      shuffleArray(randomizedQuestions);
      return randomizedQuestions;
    }

    return this.triviaData;
  }

  // Get question by id
  // TODO: Add error handling if id is not found, ie: does not exist..
  getQuestion(id: string): TriviaQuestion {
    return this.triviaData.find(question => question.id === id);
  }

  getNumberOfTriviaRounds() {
    return [{ numberOfTriviaRounds: this.numberOfTriviaRounds }];
  }
}
