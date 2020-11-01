import { Injectable } from '@nestjs/common';
import { TriviaData } from 'src/models/trivia-data';
import { TriviaQuestion } from 'src/models/trivia-question';
import { shuffleArray } from 'src/utility/utility';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

@Injectable()
export class TriviaService {
  private readonly triviaData: TriviaQuestion[];
  private numberOfTriviaRounds: number;

  constructor() {
    // Load trivia data on initialization
    this.triviaData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
    this.numberOfTriviaRounds = 10;
  }

  getAllQuestions(random?: boolean): TriviaQuestion[] {
    if (random) {
      const randomizedQuestions = [...this.triviaData];
      shuffleArray(randomizedQuestions);
      return randomizedQuestions;
    }

    return this.triviaData;
  }

  // TODO: Add error handling: ie, question with id not found, etc..
  getQuestion(id: string): TriviaQuestion {
    return this.triviaData.find(question => question.id === id);
  }

  getNumberOfTriviaRounds() {
    return this.numberOfTriviaRounds;
  }
}
