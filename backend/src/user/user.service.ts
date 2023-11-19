import { Injectable, Inject, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { genSalt, hash, compare } from 'bcrypt';
import * as fs from "fs";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User
    ) { }

    async hashPassword(password: string) {
        const salt = await genSalt(10);
        return await hash(password, salt);
    }

    async comparePassword(password: string, hashed: string) {
        return await compare(password, hashed);
    }

    async create(data: CreateUserDto) {
        const isExists = await this.isExistsByEmail(data.email);
        if (isExists) {
            throw new BadRequestException('Email is already exist');
        }

        const hashedPassword = await this.hashPassword(data.password);

        const record = await this.userRepository.create({
            email: data.email,
            password: hashedPassword,
            fullName: data.fullName,
            role: data.role,
        });

        const retData = await record.save();
        return new UserDto(retData);
    }

    async findAll() {
        const data = await this.userRepository.findAll<User>({
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new UserDto(obj));
    }

    async findOne(id: number): Promise<UserDto | undefined> {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new UserDto(record);
    }

    async findOneByEmail(email: string): Promise<UserDto | undefined> {
        const record = await this.userRepository.findOne<User>({
            where: { email: email },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new UserDto(record);
    }

    async update(id: number, data: UpdateUserDto) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const hashedPassword = await this.hashPassword(data.password);

        record.password = hashedPassword;
        record.fullName = data.fullName;
        record.role = data.role;

        const retData = await record.save();
        return new UserDto(retData);
    }

    async remove(id: number) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        this.deleteAvatar(record);

        await record.destroy();

        return "Deleted successfully";
    }

    async updateAvatar(id: number, image: any) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const fileName = `/upload/user/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.avatarUrl) {
            return "File is already exist";
        }

        this.deleteAvatar(record);

        image.mv(`./public${fileName}`);

        record.avatarUrl = fileName;
        await record.save();

        return "Uploaded successfully";
    }

    deleteAvatar(record: User) {
        if (record.avatarUrl && record.avatarUrl !== "") {
            fs.unlinkSync(`./public${record.avatarUrl}`);
        }
    }

    async isExists(id: number) {
        const record = await this.userRepository.findOne({
            where: { id }
        });

        return !!record;
    }

    async isExistsByEmail(email: string) {
        const record = await this.userRepository.findOne({
            where: { email: email }
        });

        return !!record;
    }
}
