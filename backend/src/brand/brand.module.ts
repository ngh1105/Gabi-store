import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { DatabaseModule } from 'src/database/database.module';
import { brandProviders } from './brand.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BrandController],
  providers: [BrandService, ...brandProviders,],
  exports: [BrandService],
})
export class BrandModule { }
