import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import * as express from 'express';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { STATIC_FOLDER_NANE, STATIC_PATH_NAME } from './constants/static';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(
    `/${STATIC_PATH_NAME}`,
    express.static(join(__dirname, '..', STATIC_FOLDER_NANE)),
  );

  const config = new DocumentBuilder()
    .setTitle('Task App Backend (RiseTech)')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('endpoints', app, document);

  await app.listen(process.env.PORT || 4000);
}

bootstrap();
