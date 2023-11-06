import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength, IsOptional, IsEnum } from 'class-validator';

export class UserLoginDto {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}