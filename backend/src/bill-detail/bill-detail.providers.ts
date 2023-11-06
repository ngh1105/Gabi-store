import { BillDetail } from './entities/bill-detail.entity';

export const billDetailProviders = [
    {
        provide: 'BILL_DETAIL_REPOSITORY',
        useValue: BillDetail,
    },
];