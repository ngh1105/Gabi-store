import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CategoryDto {

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

    constructor(data: Category) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
    }
}