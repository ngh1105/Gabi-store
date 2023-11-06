import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Gabi Store Backend')
        .setDescription('Backend API for gabi store project')
        .setVersion('1.0')
        .addBearerAuth(
            {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              in: 'header',
            },
            'JWT-Token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
          )
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);

    // Validation
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(8000);
}

bootstrap();
