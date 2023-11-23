import { ApiProperty } from '@nestjs/swagger';
import { Bill } from '../entities/bill.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber, IsPhoneNumber, IsEnum, IsEmail } from 'class-validator';
import { BillStatus, PaymentMethod } from '../bill.constants';
import { BillDetailDto } from 'src/bill-detail/dto/bill-detail.dto';

export class BillDto {

    @ApiProperty()
    @IsOptional()
    id?: number;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    fullName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber('VN')
    phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    @ApiProperty()
    @IsEnum(PaymentMethod)
    @IsOptional()
    paymentMethod: PaymentMethod = PaymentMethod.COD;

    @ApiProperty()
    @IsEnum(BillStatus)
    @IsOptional()
    status: BillStatus = BillStatus.PENDING;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    details: BillDetailDto[];

    constructor(data: Bill) {
        this.id = data.id;
        this.fullName = data.fullName;
        this.email = data.email;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
        this.totalPrice = data.totalPrice;
        this.paymentMethod = data.paymentMethod;
        this.status = data.status;
        this.userId = data.userId;
    }
}