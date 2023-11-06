import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { billProviders } from './bill.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [BillController],
    providers: [
        BillService,
        ...billProviders,
    ],
})
export class BillModule { }
