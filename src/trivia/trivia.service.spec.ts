import { Test, TestingModule } from '@nestjs/testing';
import { TriviaData } from '../models/trivia-data';
import { TriviaQuestion } from '../models/trivia-question';
import { TriviaService } from './trivia.service';
import * as data from '../data/Apprentice_TandemFor400_Data.json';

describe('TriviaService', () => {
  let service: TriviaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TriviaService],
    }).compile();

    service = module.get<TriviaService>(TriviaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all trivia data as a TriviaQuestion array when calling getAllQuestions method', () => {
    // Arrange
    const generatedData = TriviaQuestion.generateTriviaQuestionArray(data as TriviaData[]);
    // Act
    // Assert
    expect(service.getAllQuestions()).toStrictEqual(generatedData);
  });
});
