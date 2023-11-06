import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { genSalt, hash, compare } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User
    ) { }

    async create(data: CreateUserDto) {
        const salt = await genSalt(10);
        const hashedPassword = await hash(data.password, salt);

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
        const data = await this.userRepository.findAll<User>();
        return data.map(obj => new UserDto(obj));
    }

    async findOne(id: number) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
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

        const salt = await genSalt(10);
        const hashedPassword = await hash(data.password, salt);

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

        await record.destroy();

        return "Deleted successfully";
    }

    async isExists(id: number) {
        const record = await this.userRepository.findOne({ 
            where: { id } 
        });

        return !!record;
    }
}
