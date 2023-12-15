import {
    Controller, Get, Post, Body, Patch, Param,
    Delete, UseGuards, BadRequestException, Req, InternalServerErrorException, Query
} from '@nestjs/common';
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
        try {
            return this.productService.create(createProductDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get()
    findAll() {
        try {
            return this.productService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("/find-paginate")
    async findPaginate(@Query('limit') limit: number, @Query('page') page: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            page = page ? Number(page) : 1; // Default page is 1

            const offset = (page - 1) * limit;

            const totalItems = await this.productService.count();
            const totalPages = Math.ceil(totalItems / limit);

            const data = await this.productService.findPaginate(limit, offset);

            return {
                data: data,
                totalPages: totalPages,
            };
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("find-best-selling")
    findBestSelling(@Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            return this.productService.findBestSelling(limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("find-best-rating")
    findBestRating(@Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            return this.productService.findBestRating(limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("find-best-view")
    findBestView(@Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            return this.productService.findBestView(limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("find-newest")
    findNewest(@Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            return this.productService.findNewest(limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("count-total")
    countAll() {
        try {
            return this.productService.count();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            this.productService.increaseView(+id, 1);
            return this.productService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get('/find-related/:id')
    findRelated(@Param('id') id: string, @Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            return this.productService.findRelated(+id, limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        try {
            return this.productService.update(+id, updateProductDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        try {
            return this.productService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post('upload-image/:id')
    uploadFile(@Param('id') id: string, @Req() request: Request) {
        try {
            if (!request.files) {
                throw new BadRequestException("Invalid file");
            }

            const image = request.files["image"];
            if (!image) {
                throw new BadRequestException("Invalid image");
            }

            return this.productService.updateImage(+id, image);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
