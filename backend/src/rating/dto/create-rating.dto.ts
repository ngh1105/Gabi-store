import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { RatingDto } from "./rating.dto";

export class CreateRatingDto extends OmitType(RatingDto, ['id'] as const) {

}
