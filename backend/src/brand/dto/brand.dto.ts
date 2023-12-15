import { ApiProperty } from '@nestjs/swagger';
import { Brand } from '../entities/brand.entity';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class BrandDto {

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

    constructor(data: Brand) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
    }
}