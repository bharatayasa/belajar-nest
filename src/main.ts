import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieparser from 'cookie-parser'; 
import * as mustache from 'mustache-express'; 
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieparser('bebas'));
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'html');
  app.engine('html', mustache());

  await app.listen(3000);
  console.log(`Server up and running at http://localhost:3000`);
}

bootstrap();
