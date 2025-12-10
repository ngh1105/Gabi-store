import { ApiProperty } from '@nestjs/swagger';
import { Wishlist } from '../entities/wishlist.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class WishlistDto {

    @ApiProperty()
    @IsOptional()
    id?: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    productId: number;

    constructor(data: Wishlist) {
        this.id = data.id;
        this.userId = data.userId;
        this.productId = data.productId;
    }
}