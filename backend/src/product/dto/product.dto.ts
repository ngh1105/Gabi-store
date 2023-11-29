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
    viewCount?: number = 0;

    @ApiProperty()
    @IsOptional()
    description?: string = "";

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    categoryId: number;

    @ApiProperty()
    @IsOptional()
    createdAt?: string = "";

    @ApiProperty()
    @IsOptional()
    updatedAt?: string = "";

    constructor(data: Product) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        this.price = data.price;
        this.viewCount = data.viewCount;
        this.description = data.description;
        this.categoryId = data.categoryId;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}