import { Injectable, Inject } from '@nestjs/common';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { BillDetail } from './entities/bill-detail.entity';

@Injectable()
export class BillDetailService {
    constructor(
        @Inject('BILL_DETAIL_REPOSITORY')
        private billDetailRepository: typeof BillDetail
    ) {}

    create(createBillDetailDto: CreateBillDetailDto) {
        return 'This action adds a new billDetail';
    }

    findAll() {
        return `This action returns all billDetail`;
    }

    findOne(id: number) {
        return `This action returns a #${id} billDetail`;
    }

    update(id: number, updateBillDetailDto: UpdateBillDetailDto) {
        return `This action updates a #${id} billDetail`;
    }

    remove(id: number) {
        return `This action removes a #${id} billDetail`;
    }
}
