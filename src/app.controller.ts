import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  root() {
    return {
      title: 'Tandem Trivia',
      home_title_text: 'Welcome to Tandem Trivia!'
    };
  }
}
