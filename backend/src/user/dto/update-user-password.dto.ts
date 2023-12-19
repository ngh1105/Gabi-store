import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength, IsOptional, IsEnum } from 'class-validator';

export class UpdateUserPasswordDto {

    @ApiProperty()
    @IsNotEmpty()
    oldPassword: string;

    @ApiProperty()
    @IsNotEmpty()
    newPassword: string;
}