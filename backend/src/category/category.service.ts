import { Injectable, Inject, HttpStatus, HttpException, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';
import * as fs from "fs";

@Injectable()
export class CategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: typeof Category
    ) {}

    async create(data: CreateCategoryDto) {
        const record = await this.categoryRepository.create({
            name: data.name,
        });

        const retData = await record.save();
        return new CategoryDto(retData);
    }

    async findAll() {
        const data = await this.categoryRepository.findAll<Category>({
            order: [
                ['id', 'DESC']
            ]
        });
        
        return data.map(obj => new CategoryDto(obj));
    }

    async findPaginate(limit: number, offset: number) {
        const data = await this.categoryRepository.findAll<Category>({
            limit: limit,
            offset: offset,
            order: [
                ['id', 'DESC']
            ]
        });
        
        return data.map(obj => new CategoryDto(obj));
    }

    async findOne(id: number) {
        const record = await this.categoryRepository.findOne<Category>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new CategoryDto(record);
    }

    async update(id: number, data: UpdateCategoryDto) {
        const record = await this.categoryRepository.findOne<Category>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.name = data.name;

        const retData = await record.save();
        return new CategoryDto(retData);
    }

    async remove(id: number) {
        const record = await this.categoryRepository.findOne<Category>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        this.deleteImage(record);

        await record.destroy();

        return "Deleted successfully";
    }

    async removeAll() {
        // Find all records in the category table
        const data = await this.categoryRepository.findAll<Category>();
    
        // Loop through each record and delete it
        for (const record of data) {
            this.deleteImage(record);
            await record.destroy();
        }
    
        return "All records deleted successfully";
    }

    async updateImage(id: number, image: any) {
        const record = await this.categoryRepository.findOne<Category>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        if (image.name.length > 155) {
            throw new BadRequestException("File name too long");
        }

        const fileName = `/upload/category/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.imageUrl) {
            return "File is already exist";
        }

       this.deleteImage(record);

        image.mv(`./public${fileName}`);

        record.imageUrl = fileName;
        await record.save();

        return "Uploaded successfully";
    }

    deleteImage(record: Category) {
        if (record.imageUrl && record.imageUrl !== "") {
            fs.unlinkSync(`./public${record.imageUrl}`);
        }
    }

    async isExists(id: number) {
        const record = await this.categoryRepository.findOne({ 
            where: { id } 
        });

        return !!record;
    }

    async count() {
        return await this.categoryRepository.count();
    }
}
