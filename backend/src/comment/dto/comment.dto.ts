import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '../entities/comment.entity';
import { IsNotEmpty, MaxLength, IsOptional, IsNumber } from 'class-validator';

export class CommentDto {

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

    @ApiProperty()
    @IsOptional()
    content?: string = "";

    @ApiProperty()
    @IsOptional()
    createdAt?: string = "";

    constructor(data: Comment) {
        this.id = data.id;
        this.userId = data.userId;
        this.productId = data.productId;
        this.content = data.content;
        this.createdAt = data.createdAt;
    }
}