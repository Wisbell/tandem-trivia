import { NestFactory, HttpAdapterHost, AbstractHttpAdapter } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { Express } from "express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* Add necessary node modules for use in front end without full node_modules file access */
  const adapterHost: HttpAdapterHost = app.get(HttpAdapterHost);
  const httpAdapter: AbstractHttpAdapter = adapterHost.httpAdapter;
  const expressInstance: Express = httpAdapter.getInstance();

  expressInstance.get('/css/bulma.min.css', function (req, res) {
    res.sendFile(join(__dirname, '..', 'node_modules/bulma/css/bulma.min.css'));
  });
  /* END: Add necessary node modules */

  /* Add all view directories */
  app.setBaseViewsDir([
    join(__dirname, '..', 'src', 'views', 'home'),
    join(__dirname, '..', 'src', 'views', 'trivia'),
    join(__dirname, '..', 'src', 'views', 'about')
  ]);

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.setViewEngine('pug');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
