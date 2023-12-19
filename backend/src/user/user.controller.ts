import {
    Controller, Get, Post, Body, Patch, Param, Delete,
    BadRequestException, Req, UseGuards, InternalServerErrorException
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard, GuestGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        try {
            return this.userService.create(createUserDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get()
    findAll() {
        try {
            return this.userService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("/count-total")
    countAll() {
        try {
            return this.userService.count();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.userService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Patch('update-info/:id')
    updateInfo(@Param('id') id: string, @Body() data: UpdateUserInfoDto) {
        try {
            return this.userService.updateInfo(+id, data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Patch('update-password/:id')
    updatePassword(@Param('id') id: string, @Body() data: UpdateUserPasswordDto) {
        try {
            return this.userService.updatePassword(+id, data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        try {
            return this.userService.update(+id, updateUserDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string, @Req() request: Request) {
        try {
            return this.userService.remove(+id, request['user']);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post('upload-avatar/:id')
    uploadFile(@Param('id') id: string, @Req() request: Request) {
        try {
            if (!request.files) {
                throw new BadRequestException("Invalid file");
            }

            const image = request.files["image"];
            if (!image) {
                throw new BadRequestException("Invalid image");
            }

            return this.userService.updateAvatar(+id, image);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
