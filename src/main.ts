import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieparser from 'cookie-parser'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieparser('bebas'));
  await app.listen(3000);
}
console.log(`server up and running at http://localhost:${3000}`);
bootstrap();
