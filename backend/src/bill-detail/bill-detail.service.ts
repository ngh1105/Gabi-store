import { Injectable, Inject } from '@nestjs/common';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { BillDetail } from './entities/bill-detail.entity';
import { BillDetailDto } from './dto/bill-detail.dto';
import { Sequelize } from 'sequelize-typescript';
import { Bill } from 'src/bill/entities/bill.entity';

@Injectable()
export class BillDetailService {
    constructor(
        @Inject('BILL_DETAIL_REPOSITORY')
        private billDetailRepository: typeof BillDetail
    ) { }

    async create(data: BillDetailDto) {

        const record = await this.billDetailRepository.create({
            billId: data.billId,
            productId: data.productId,
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            imageUrl: data.imageUrl,
            color: data.color,
            size: data.size,
        });

        const billData = await record.save();

        return billData;
    }

    async findByBillId(id: number) {
        const data = await this.billDetailRepository.findAll<BillDetail>({
            where: { billId: id },
        });

        return data.map(obj => new BillDetailDto(obj));
    }

    async findBestSelling() {
        const data = await this.billDetailRepository.findAll<BillDetail>({
            attributes: ['productId', [Sequelize.fn('sum', Sequelize.col('quantity')), 'totalQuantity']],
            group: ['productId'],
            order: [[Sequelize.literal('totalQuantity'), 'DESC']]
        });

        return data.map(obj => ({
            productId: obj.productId,
            totalQuantity: obj.getDataValue('totalQuantity')
        }));
    }

    async count() {
        return await this.billDetailRepository.count();
    }

    async findPaginate(limit: number) {
        const data = await this.billDetailRepository.findAll<BillDetail>({
            limit: limit,
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BillDetailDto(obj));
    }

    async isBought(idUser: number, idProduct: number) {
        const record = await this.billDetailRepository.findOne({
            include: [{
                model: Bill,
                where: { userId: idUser },
                attributes: []
            }],
            where: { productId: idProduct },
        });

        if (record) {
            return true;
        }

        return false;
    }
}
