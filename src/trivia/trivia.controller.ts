import { Controller, Get, Param, Render } from '@nestjs/common';
import { TriviaGame } from 'src/models/trivia-game';
import { TriviaService } from './trivia.service';

@Controller('trivia')
export class TriviaController {
  constructor(private triviaService: TriviaService) { }

  @Get('')
  @Render('trivia')
  root() {
    return {
      trivia: new TriviaGame(
        10,
        this.triviaService.getAllQuestions()
      )
    };
  }

  @Get('api')
  getAllQuestions() {
    return this.triviaService.getAllQuestions();
  }

  @Get('api/:id')
  getQuestion(@Param('id') id: string) {
    return this.triviaService.getQuestion(id);
  }

  @Get('api/name/:name')
  getQuestionByName(@Param('name') name: string) {
    return this.triviaService.getQuestionByName(name);
  }
}
