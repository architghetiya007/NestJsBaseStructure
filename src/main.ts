import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:true,
    bufferLogs:true
  });
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
  .setTitle('Base Code Structure For With Swagger Documentation')
  .setDescription('Base Code Structure For With Swagger Documentation')
  .setVersion('1.0')
  .addBearerAuth({type:'http', bearerFormat:'JWT', scheme:'Bearer'})
  .build()

  const buildDocument = SwaggerModule.createDocument(app,swaggerConfig);
  SwaggerModule.setup('api',app, buildDocument);
  await app.listen(3000);
}
bootstrap();
