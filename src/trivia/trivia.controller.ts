import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { TriviaGame } from 'src/models/trivia-game';
import { TriviaService } from './trivia.service';

// TODO: Move trivia render back to app controller
@Controller('trivia')
export class TriviaController {
  constructor(private triviaService: TriviaService) { }

  // TODO: Make random query only accept true and false strings -> Make custom pipe
  @Get('api')
  getAllQuestions(@Query('random') random: string) {
    if (random === 'true')
      return this.triviaService.getAllQuestions(true);

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
