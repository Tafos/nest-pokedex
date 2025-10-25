import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve la data que no se esta esperando
      forbidNonWhitelisted: true, // error si envio propiedades de mas
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
