import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as fileUpload from 'express-fileupload';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(express.static('public'));

    app.use(fileUpload({ createParentPath: true }));

    app.use(cookieParser());

    app.enableCors({
        credentials: true,
        origin: [
            "http://localhost:3000",
            "http://localhost:8000",
        ]
    })

    const config = new DocumentBuilder()
        .setTitle('Gabi Store Backend')
        .setDescription('Backend API for gabi store project')
        .setVersion('1.0')
        .addApiKey({
            type: 'apiKey', 
            name: 'api-key',
            in: 'header',
        }, 'private-key')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);

    // Validation
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(8000);
}

bootstrap();
