import { Controller, Get, Render } from '@nestjs/common';
import { TriviaGame } from './models/trivia-game';
import { TriviaService } from './trivia/trivia.service';

@Controller()
export class AppController {
  constructor(private triviaService: TriviaService) { }

  @Get()
  @Render('home')
  root() {
    return {
      title: 'Tandem Trivia',
      home_title_text: 'Welcome to Tandem Trivia!'
    };
  }

  @Get('trivia')
  @Render('trivia')
  trivia() {
    return {
      trivia: new TriviaGame(
        10,
        this.triviaService.getAllQuestions()
      )
    };
  }
}
