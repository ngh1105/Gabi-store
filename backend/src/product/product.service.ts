import { Injectable, Inject, HttpStatus, HttpException, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';
import { CategoryService } from 'src/category/category.service';
import * as fs from "fs";

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product,

        private categoryService: CategoryService
    ) { }

    async create(data: CreateProductDto) {
        const isExists = await this.categoryService.isExists(data.categoryId);
        if (!isExists) {
            throw new HttpException('Category is not exist', HttpStatus.NOT_FOUND);
        }

        const record = await this.productRepository.create({
            name: data.name,
            price: data.price,
            description: data.description,
            categoryId: data.categoryId,
        });

        const retData = await record.save();
        return new ProductDto(retData);
    }

    async findAll() {
        const data = await this.productRepository.findAll<Product>({
            order: [
                ['id', 'DESC']
            ]
        });
        
        return data.map(obj => new ProductDto(obj));
    }

    async findPaginate(limit: number, offset: number) {
        const data = await this.productRepository.findAll<Product>({
            limit: limit,
            offset: offset,
            order: [
                ['id', 'DESC']
            ]
        });
        
        return data.map(obj => new ProductDto(obj));
    }

    async findOne(id: number) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new ProductDto(record);
    }

    async increaseView(id: number, value: number) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        await record.increment('viewCount', { by: value });

        return "Increased successfully";
    }

    async update(id: number, data: UpdateProductDto) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.name = data.name;
        record.price = data.price;
        record.description = data.description;
        record.categoryId = data.categoryId;

        const retData = await record.save();
        return new ProductDto(retData);
    }

    async remove(id: number) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        this.deleteImage(record);

        await record.destroy();

        return "Deleted successfully";
    }

    async updateImage(id: number, image: any) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        if (image.name.length > 155) {
            throw new BadRequestException("File name too long");
        }

        const fileName = `/upload/product/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.imageUrl) {
            return "File is already exist";
        }

        this.deleteImage(record);

        image.mv(`./public${fileName}`);

        record.imageUrl = fileName;
        await record.save();

        return "Uploaded successfully";
    }

    async isExists(id: number) {
        const record = await this.productRepository.findOne({
            where: { id }
        });

        return !!record;
    }

    deleteImage(record: Product) {
        if (record.imageUrl && record.imageUrl !== "") {
            fs.unlinkSync(`./public${record.imageUrl}`);
        }
    }

    async count() {
        return await this.productRepository.count();
    }
}
