import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength, IsOptional, IsEnum } from 'class-validator';

export class UpdateUserInfoDto {

    @ApiProperty()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsOptional()
    phoneNumber?: string = "";

    @ApiProperty()
    @IsOptional()
    address?: string = "";
}