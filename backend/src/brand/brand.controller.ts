import {
    Controller, Get, Post, Body, Patch, Param,
    Delete, UseGuards, Query, InternalServerErrorException, Req, BadRequestException
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createBrandDto: CreateBrandDto) {
        try {
            return this.brandService.create(createBrandDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get()
    findAll() {
        try {
            return this.brandService.findAll();
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

            const totalItems = await this.brandService.count();
            const totalPages = Math.ceil(totalItems / limit);

            const data = await this.brandService.findPaginate(limit, offset);

            return {
                data: data,
                totalPages: totalPages,
            };
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.brandService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
        try {
            return this.brandService.update(+id, updateBrandDto);
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
            return this.brandService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete('remove-all')
    removeAll() {
        try {
            return this.brandService.removeAll();
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

            return this.brandService.updateImage(+id, image);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
