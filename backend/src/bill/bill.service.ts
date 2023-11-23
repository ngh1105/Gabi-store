import { Injectable, Inject, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { UserService } from 'src/user/user.service';
import { BillDto } from './dto/bill.dto';
import { BillDetailService } from 'src/bill-detail/bill-detail.service';
import { CreateBillDetailDto } from 'src/bill-detail/dto/create-bill-detail.dto';

@Injectable()
export class BillService {
    constructor(
        @Inject('BILL_REPOSITORY')
        private billRepository: typeof Bill,

        private userSerivce: UserService,
        private billDetailService: BillDetailService,
    ) { }

    async create(data: CreateBillDto) {
        const isExists = await this.userSerivce.isExists(data.userId);
        if (!isExists) {
            throw new HttpException('User is not exist', HttpStatus.NOT_FOUND);
        }

        const record = await this.billRepository.create({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            totalPrice: data.totalPrice,
            paymentMethod: data.paymentMethod,
            status: data.status,
            userId: data.userId,
        });

        const billData = await record.save();

        data.details.forEach(async (obj, index) => {
            obj.billId = billData.id;
            await this.billDetailService.create(obj);
        })

        return new BillDto(billData);
    }

    findAll() {
        return `This action returns all bill`;
    }

    async findOne(id: number) {
        const record = await this.billRepository.findOne<Bill>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const retData = new BillDto(record);

        retData.details = await this.billDetailService.findByBillId(record.id);

        return retData;
    }

    async findOneByUser(idUser: number, idBill: number) {
        const record = await this.billRepository.findOne<Bill>({
            where: { 
                id: idBill,
                userId: idUser,
            },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const retData = new BillDto(record);

        retData.details = await this.billDetailService.findByBillId(record.id);

        return retData;
    }

    async findAllByUser(idUser: number, user: any) {
        if (idUser !== user.userId) {
            throw new UnauthorizedException("You cannot not view others bill list");
        }

        const data = await this.billRepository.findAll<Bill>({
            where: { userId: idUser },
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BillDto(obj));
    }
}
