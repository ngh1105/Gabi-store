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
        .addApiKey({
            type: 'apiKey', 
            name: 'api-key',
            in: 'header',
        }, 'access-key')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);

    // Validation
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(8000);
}

bootstrap();
