import { BadRequestException, HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { BrandDto } from './dto/brand.dto';
import * as fs from "fs";

@Injectable()
export class BrandService {
    constructor(
        @Inject('BRAND_REPOSITORY')
        private brandRepository: typeof Brand
    ) { }

    async create(data: CreateBrandDto) {
        const record = await this.brandRepository.create({
            name: data.name,
        });

        const retData = await record.save();
        return new BrandDto(retData);
    }

    async findAll() {
        const data = await this.brandRepository.findAll<Brand>({
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BrandDto(obj));
    }

    async findPaginate(limit: number, offset: number) {
        const data = await this.brandRepository.findAll<Brand>({
            limit: limit,
            offset: offset,
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BrandDto(obj));
    }

    async findOne(id: number) {
        const record = await this.brandRepository.findOne<Brand>({
            where: { id: id },
        });

        if (!record) {
            throw new NotFoundException('No record found');
        }

        return new BrandDto(record);
    }

    async update(id: number, data: UpdateBrandDto) {
        const record = await this.brandRepository.findOne<Brand>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.name = data.name;

        const retData = await record.save();
        return new BrandDto(retData);
    }

    async remove(id: number) {
        const record = await this.brandRepository.findOne<Brand>({
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
        const data = await this.brandRepository.findAll<Brand>();

        // Loop through each record and delete it
        for (const record of data) {
            this.deleteImage(record);
            await record.destroy();
        }

        return "All records deleted successfully";
    }

    async updateImage(id: number, image: any) {
        const record = await this.brandRepository.findOne<Brand>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        if (image.name.length > 155) {
            throw new BadRequestException("File name too long");
        }

        const fileName = `/upload/brand/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.imageUrl) {
            return "File is already exist";
        }

        this.deleteImage(record);

        image.mv(`./public${fileName}`);

        record.imageUrl = fileName;
        await record.save();

        return "Uploaded successfully";
    }

    deleteImage(record: Brand) {
        if (record.imageUrl && record.imageUrl !== "") {
            fs.unlinkSync(`./public${record.imageUrl}`);
        }
    }

    async isExists(id: number) {
        const record = await this.brandRepository.findOne({
            where: { id }
        });

        return !!record;
    }

    async count() {
        return await this.brandRepository.count();
    }
}
