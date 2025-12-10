import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { IsNotEmpty, IsEmail, MaxLength, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from '../user.constants';

export class UserDto {

    @ApiProperty()
    @IsOptional()
    id?: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsEnum(UserRole)
    @IsOptional()
    role: UserRole = UserRole.GUEST;

    @ApiProperty()
    @IsOptional()
    avatarUrl?: string = "";

    @ApiProperty()
    @IsOptional()
    phoneNumber?: string = "";

    @ApiProperty()
    @IsOptional()
    address?: string = "";

    @ApiProperty()
    @IsOptional()
    isEmailVerified?: boolean = false;

    constructor(data: User) {
        this.id = data.id;
        this.email = data.email;
        this.password = data.password;
        this.fullName = data.fullName;
        this.role = data.role;
        this.avatarUrl = data.avatarUrl;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
        this.isEmailVerified = data.isEmailVerified;
    }
}