import { Injectable, Inject, HttpStatus, HttpException, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';
import { CategoryService } from 'src/category/category.service';
import * as fs from "fs";
import { BillDetailService } from 'src/bill-detail/bill-detail.service';
import { Op } from 'sequelize';
import { RatingService } from 'src/rating/rating.service';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product,

        private categoryService: CategoryService,
        private billDetailService: BillDetailService,
        private ratingService: RatingService
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
            brandId: data.brandId,
            colors: data.colors,
            sizes: data.sizes,
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

    async findBestSelling(limit: number) {
        const bestSellings = await this.billDetailService.findBestSelling();

        // Get the product IDs of the best selling products
        const productIds = bestSellings.map(obj => obj.productId);

        // Find the products with the product IDs
        const products = await this.productRepository.findAll<Product>({
            where: { id: { [Op.in]: productIds } },
            limit: limit
        });

        return products.map(obj => new ProductDto(obj));
    }

    async findBestRating(limit: number) {
        const fromRatings = await this.ratingService.findBestRating(limit);
        const productIds = fromRatings.map(rating => rating.productId);

        const products = await this.productRepository.findAll({
            where: {
                id: {
                    [Op.in]: productIds
                }
            }
        });

        return products;
    }

    async findBestView(limit: number) {
        const products = await this.productRepository.findAll({
            order: [['viewCount', 'DESC']],
            limit: limit
        });

        return products;
    }

    async findNewest(limit: number) {
        const products = await this.productRepository.findAll<Product>({
            order: [['createdAt', 'DESC']],
            limit: limit
        });

        return products.map(obj => new ProductDto(obj));
    }

    async findRelated(id: number, limit: number) {
        const record = await this.productRepository.findOne<Product>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const data = await this.productRepository.findAll<Product>({
            where: {
                categoryId: record.categoryId,
                id: { [Op.ne]: id } // Exclude the current product ID
            },
            limit: limit
        });

        return data.map(obj => new ProductDto(obj));
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
        record.brandId = data.brandId;
        record.colors = data.colors;
        record.sizes = data.sizes;

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
