import { PartialType } from '@nestjs/swagger';
import { CreateBillDetailDto } from './create-bill-detail.dto';

export class UpdateBillDetailDto extends PartialType(CreateBillDetailDto) {}
