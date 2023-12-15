import { OmitType, PartialType } from "@nestjs/swagger";
import { BrandDto } from "./brand.dto";

export class CreateBrandDto extends OmitType(BrandDto, ['id'] as const) {

}
