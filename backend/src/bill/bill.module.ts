import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { billProviders } from './bill.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { BillDetailModule } from 'src/bill-detail/bill-detail.module';

@Module({
    imports: [DatabaseModule, UserModule, BillDetailModule],
    controllers: [BillController],
    providers: [
        BillService,
        ...billProviders,
    ],
})
export class BillModule { }
