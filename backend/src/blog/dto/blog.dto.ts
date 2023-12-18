import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '../entities/blog.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class BlogDto {

    @ApiProperty()
    @IsOptional()
    id?: number;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    title: string;

    @ApiProperty()
    @IsOptional()
    thumbnail?: string = "";

    @ApiProperty()
    @IsOptional()
    description?: string = "";

    @ApiProperty()
    @IsOptional()
    content?: string = "";

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsOptional()
    createdAt?: string = "";

    constructor(data: Blog) {
        this.id = data.id;
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.description = data.description;
        this.content = data.content;
        this.userId = data.userId;
        this.createdAt = data.createdAt;
    }
}