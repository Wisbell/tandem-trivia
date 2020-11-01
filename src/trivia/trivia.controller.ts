import { Controller, Get, Param, Query } from '@nestjs/common';
import { TriviaService } from './trivia.service';

@Controller('api/trivia')
export class TriviaController {
  constructor(private triviaService: TriviaService) { }

  // TODO: Make random query only accept true and false strings -> Make custom pipe
  @Get()
  getAllQuestions(@Query('random') random: string) {
    if (random === 'true')
      return this.triviaService.getAllQuestions(true);

    return this.triviaService.getAllQuestions();
  }

  @Get('rounds')
  getRounds() {
    return this.triviaService.getNumberOfTriviaRounds();
  }

  @Get(':id')
  getQuestion(@Param('id') id: string) {
    return this.triviaService.getQuestion(id);
  }
}
