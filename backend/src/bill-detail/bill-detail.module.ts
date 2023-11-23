import { Module } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { BillDetailController } from './bill-detail.controller';
import { DatabaseModule } from 'src/database/database.module';
import { billDetailProviders } from './bill-detail.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BillDetailController],
    providers: [
        BillDetailService,
        ...billDetailProviders
    ],
    exports: [BillDetailService],
})
export class BillDetailModule { }
