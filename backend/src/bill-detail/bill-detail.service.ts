import { Injectable, Inject } from '@nestjs/common';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { BillDetail } from './entities/bill-detail.entity';
import { BillDetailDto } from './dto/bill-detail.dto';

@Injectable()
export class BillDetailService {
    constructor(
        @Inject('BILL_DETAIL_REPOSITORY')
        private billDetailRepository: typeof BillDetail
    ) {}

    async create(data: BillDetailDto) {

        const record = await this.billDetailRepository.create({
            billId: data.billId,
            productId: data.productId,
            quantity: data.quantity,
            price: data.price,
            imageUrl: data.imageUrl,
        });

        const billData = await record.save();

        return billData;
    }

    async findByBillId(id: number) {
        const data = await this.billDetailRepository.findAll<BillDetail>({
            where: { billId: id },
        });
        
        return data.map(obj => new BillDetailDto(
            obj.billId, obj.productId, obj.quantity, obj.price, obj.imageUrl
        ));
    }
}
