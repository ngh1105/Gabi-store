import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { DatabaseModule } from 'src/database/database.module';
import { wishlistProviders } from './wishlist.providers';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [WishlistController],
    providers: [WishlistService, ...wishlistProviders,],
    exports: [WishlistService],
})
export class WishlistModule { }
