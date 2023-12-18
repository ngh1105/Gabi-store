import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength, IsOptional, IsEnum } from 'class-validator';

export class ForgotPasswordDto {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}