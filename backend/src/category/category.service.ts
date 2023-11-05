import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    async create(data: CreateCategoryDto) {
        try {

            const record = await Category.create({
                name: data.name,
            });

            const retData = await record.save();
            return new CategoryDto(retData);
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findAll() {
        try {

            const data = await Category.findAll<Category>();
            return data.map(scientist => new CategoryDto(scientist));
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findOne(id: number) {
        try {

            const record = await Category.findOne<Category>({
                where: { id: id },
            });

            if (!record) {
                throw new HttpException('No record found', HttpStatus.NOT_FOUND);
            }

            return new CategoryDto(record);
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, data: UpdateCategoryDto) {
        try {

            const record = await Category.findOne<Category>({
                where: { id: id },
            });

            if (!record) {
                throw new HttpException('No record found', HttpStatus.NOT_FOUND);
            }

            record.name = data.name;

            const retData = await record.save();
            return new CategoryDto(retData);
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async remove(id: number) {
        try {

            const record = await Category.findOne<Category>({
                where: { id: id },
            });

            if (!record) {
                throw new HttpException('No record found', HttpStatus.NOT_FOUND);
            }

            await record.destroy();

            return "Deleted successfully";
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
