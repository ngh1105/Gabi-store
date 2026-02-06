import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Product } from './product/entities/product.entity';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log('--- DEBUG DB START ---');
    const products = await Product.findAll();
    products.forEach(p => console.log(`ID: ${p.id}, Name: ${p.name}`));
    console.log('--- DEBUG DB END ---');
    await app.close();
}

bootstrap();
