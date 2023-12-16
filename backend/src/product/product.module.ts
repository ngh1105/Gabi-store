import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './product.providers';
import { CategoryModule } from 'src/category/category.module';
import { BillDetailModule } from 'src/bill-detail/bill-detail.module';
import { RatingModule } from 'src/rating/rating.module';

@Module({
    imports: [
        DatabaseModule,
        CategoryModule,
        BillDetailModule,
        RatingModule
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
        ...productProviders,
    ],
    exports: [ProductService],
})
export class ProductModule { }
