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
      transform: true, //transforma la data a lo esperado al enviar paramas que son string los cambia a number
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`APP running on PORT ${process.env.PORT}`);
}
bootstrap();
