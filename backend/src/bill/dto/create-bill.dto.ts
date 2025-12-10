import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { BillDto } from "./bill.dto";

export class CreateBillDto extends OmitType(BillDto, ['id'] as const) {

}
