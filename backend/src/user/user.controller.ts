import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
