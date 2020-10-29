import { Injectable, NotImplementedException } from '@nestjs/common';
import { TriviaData } from 'src/models/trivia-data';
import { TriviaQuestion } from 'src/models/trivia-question';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

@Injectable()
export class TriviaService {
  // Load trivia data on init
  private readonly triviaData: TriviaQuestion[];

  constructor() {
    this.triviaData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
  }

  // Get all questions
  getAllQuestions(): TriviaQuestion[] {
    return this.triviaData;
  }

  // Get question by index in triviaData array property
  getQuestion(index: string): TriviaQuestion {
    return this.triviaData[parseInt(index)];
  }

  // Get question by name in triviaData array property
  getQuestionByName(questionName: string): TriviaQuestion {
    throw new NotImplementedException();
  }
}
