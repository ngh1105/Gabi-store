import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
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
        const data = await this.categoryRepository.findAll<Category>();
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

    async updateImage(id: number, image: any) {
        const record = await this.categoryRepository.findOne<Category>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
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

    async isExists(id: number) {
        const record = await this.categoryRepository.findOne({ 
            where: { id } 
        });

        return !!record;
    }

    deleteImage(record: Category) {
        if (record.imageUrl && record.imageUrl !== "") {
            fs.unlinkSync(`./public${record.imageUrl}`);
        }
    }
}
