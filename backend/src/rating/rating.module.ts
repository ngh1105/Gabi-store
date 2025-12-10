import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { ratingProviders } from './rating.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RatingController],
  providers: [
    RatingService,
    ...ratingProviders,
  ],
  exports: [RatingService]
})
export class RatingModule { }
