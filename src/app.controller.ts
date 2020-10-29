import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

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
}
