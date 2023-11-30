import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';
import { BillModule } from './bill/bill.module';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        CategoryModule,
        UserModule,
        ProductModule,
        BlogModule,
        BillModule,
        BillDetailModule,
        CommentModule,
        AuthModule,
        WishlistModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
