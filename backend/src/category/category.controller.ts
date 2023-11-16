import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Req, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {

    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoryService.findOne(+id);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.update(+id, updateCategoryDto);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoryService.remove(+id);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post('upload-image/:id')
    uploadFile(@Param('id') id: string, @Req() request: Request) {
    
        if (!request.files) {
            throw new BadRequestException("Invalid file");
        }

        const image = request.files["image"];
        if (!image) {
            throw new BadRequestException("Invalid image");
        }

        return this.categoryService.updateImage(+id, image);
    }
}
