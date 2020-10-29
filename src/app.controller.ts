import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { TriviaGame } from './models/trivia-game';
import * as data from './data/Apprentice_TandemFor400_Data.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

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
      title: 'Tandem Trivia',
      game: new TriviaGame(10, data)
    };
  }
}
