import { Injectable, Inject, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { UserService } from 'src/user/user.service';
import { BlogDto } from './dto/blog.dto';
import * as fs from "fs";

@Injectable()
export class BlogService {
    constructor(
        @Inject('BLOG_REPOSITORY')
        private blogRepository: typeof Blog,

        private userService: UserService
    ) { }

    async create(data: CreateBlogDto) {
        const isExists = await this.userService.isExists(data.userId);
        if (!isExists) {
            throw new HttpException('User is not exist', HttpStatus.NOT_FOUND);
        }

        const record = await this.blogRepository.create({
            title: data.title,
            description: data.description,
            content: data.content,
            userId: data.userId,
        });

        const retData = await record.save();
        return new BlogDto(retData);
    }

    async findAll() {
        const data = await this.blogRepository.findAll<Blog>();
        return data.map(obj => new BlogDto(obj));
    }

    async findOne(id: number) {
        const record = await this.blogRepository.findOne<Blog>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new BlogDto(record);
    }

    async update(id: number, data: UpdateBlogDto) {
        const record = await this.blogRepository.findOne<Blog>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.title = data.title;
        record.description = data.description;
        record.content = data.content;

        const retData = await record.save();
        return new BlogDto(retData);
    }

    async remove(id: number) {
        const record = await this.blogRepository.findOne<Blog>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        await record.destroy();

        return "Deleted successfully";
    }

    async updateThumbnail(id: number, image: any) {
        const record = await this.blogRepository.findOne<Blog>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        if (image.name.length > 155) {
            throw new BadRequestException("File name too long");
        }

        const fileName = `/upload/blog/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.thumbnail) {
            return "File is already exist";
        }

        this.deleteThumbnail(record);

        image.mv(`./public${fileName}`);

        record.thumbnail = fileName;
        await record.save();

        return "Uploaded successfully";
    }

    deleteThumbnail(record: Blog) {
        if (record.thumbnail && record.thumbnail !== "") {
            fs.unlinkSync(`./public${record.thumbnail}`);
        }
    }
}
