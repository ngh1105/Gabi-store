import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRegisterDto } from './dto/user-register.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JWT_SECRET } from './auth.constants';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async signIn(data: UserLoginDto, res: Response): Promise<any> {

        const user = await this.userService.findOneByEmail(data.email);

        const validPassword = await this.userService.comparePassword(data.password, user.password);
        if (!validPassword) {
            throw new UnauthorizedException('Password is not correct');
        }

        const payload = { 
            userId: user.id, 
            email: user.email,
            role: user.role,
        };

        const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '60s', });
        const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '1d', });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: false,
        })

        return {
            ...payload,
            accessToken: accessToken,
        };
    }

    async register(data: UserRegisterDto) {
        const createDto = new CreateUserDto();
        createDto.email = data.email;
        createDto.password = data.password;
        createDto.fullName = data.fullName;

        return this.userService.create(createDto);
    }

    async refresh(req: Request) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            throw new BadRequestException('Invalid token');
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                refreshToken,
                {
                    secret: JWT_SECRET
                }
            );
           
            const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '60s', });

            return {
                ...payload,
                accessToken: accessToken,
            };
        } catch {
            throw new UnauthorizedException();
        }
    }
}
