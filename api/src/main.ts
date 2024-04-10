import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);

  app.use(cors({ origin: 'http://localhost:5173' }));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
