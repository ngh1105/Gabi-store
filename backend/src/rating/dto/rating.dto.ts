import { ApiProperty } from '@nestjs/swagger';
import { Rating } from '../entities/rating.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber, IsPhoneNumber, IsEnum, IsEmail } from 'class-validator';

export class RatingDto {

    @ApiProperty()
    @IsOptional()
    id?: number = 0;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    score: number;

    constructor(data: Rating) {
        this.id = data.id;
        this.productId = data.productId;
        this.userId = data.userId;
        this.score = data.score;
    }
}