import { Injectable, NotImplementedException } from '@nestjs/common';
import { TriviaData } from 'src/models/trivia-data';
import { TriviaQuestion } from 'src/models/trivia-question';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

@Injectable()
export class TriviaService {
  // Load trivia data on init
  constructor(
    private readonly triviaData: TriviaQuestion[]
  ) {
    triviaData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
  }

  // Get question by index in triviaData array
  getQuestion(index: number): TriviaQuestion {
    return this.triviaData[index];
  }
}
