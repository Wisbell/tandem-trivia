import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { join } from 'path';
import * as pug from 'pug';

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    app.setBaseViewsDir([
      join(__dirname, '..', 'src', 'views', 'home'),
      join(__dirname, '..', 'src', 'views', 'trivia'),
      join(__dirname, '..', 'src', 'views', 'about')
    ]);
    app.setViewEngine('pug');
    await app.init();
  });

  it('/ (GET)', () => {
    const pugRenderedHtml = pug.renderFile(
      join(__dirname, '..', 'src', 'views', 'home', 'home.pug'),
      {
        title: 'Tandem Trivia',
        home_title_text: 'Welcome to Tandem Trivia!'
      }
    );

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(pugRenderedHtml);
  });
});
