import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from frontend
    credentials: true, // Allow cookies to be sent
  });

  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
