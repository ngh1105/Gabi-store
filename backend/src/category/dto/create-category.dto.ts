import { OmitType, PartialType } from "@nestjs/swagger";
import { CategoryDto } from "./category.dto";

export class CreateCategoryDto extends OmitType(CategoryDto, ['id'] as const) {
    
}
