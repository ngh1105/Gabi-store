import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
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

        return this.productService.updateImage(+id, image);
    }
}
