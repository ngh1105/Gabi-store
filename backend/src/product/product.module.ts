import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './product.providers';
import { CategoryModule } from 'src/category/category.module';

@Module({
    imports: [DatabaseModule, CategoryModule],
    controllers: [ProductController],
    providers: [
        ProductService, 
        ...productProviders,
    ],
})
export class ProductModule { }
