import { Injectable, NotImplementedException } from '@nestjs/common';
import { TriviaData } from 'src/models/trivia-data';
import { TriviaQuestion } from 'src/models/trivia-question';
import { shuffleArray } from 'src/utility/utility';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

@Injectable()
export class TriviaService {
  // Load trivia data on initialization
  private readonly triviaData: TriviaQuestion[];
  // TODO: Store number of rounds in this service

  constructor() {
    this.triviaData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
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

  // Get question by name in triviaData array property
  // TODO: Implement if necessary or remove
  getQuestionByName(questionName: string): TriviaQuestion {
    throw new NotImplementedException();
  }
}
