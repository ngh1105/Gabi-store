import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class ProductDto {

    @ApiProperty()
    @IsOptional()
    id?: number;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @ApiProperty()
    @IsOptional()
    imageUrl?: string = "";

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsOptional()
    description?: string = "";

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    categoryId: number;

    constructor(data: Product) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        this.price = data.price;
        this.description = data.description;
        this.categoryId = data.categoryId;
    }
}