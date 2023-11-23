import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
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

    findOne(id: number) {
        return `This action returns a #${id} bill`;
    }

    update(id: number, updateBillDto: UpdateBillDto) {
        return `This action updates a #${id} bill`;
    }

    remove(id: number) {
        return `This action removes a #${id} bill`;
    }
}
