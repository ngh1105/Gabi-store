import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRegisterDto } from './dto/user-register.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ACCESS_KEY_EXPIRATION, JWT_SECRET, REFRESH_KEY_EXPIRATION } from './auth.constants';

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
            avatarUrl: user.avatarUrl,
        };

        const accessToken = await this.jwtService.signAsync(payload, { expiresIn: ACCESS_KEY_EXPIRATION, });
        const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: REFRESH_KEY_EXPIRATION, });

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
            const tokenData = await this.jwtService.verifyAsync(
                refreshToken,
                {
                    secret: JWT_SECRET
                }
            );

            const payload = {
                userId: tokenData.userId,
                email: tokenData.email,
                role: tokenData.role,
                avatarUrl: tokenData.avatarUrl,
            };

            const accessToken = await this.jwtService.signAsync(payload, { expiresIn: ACCESS_KEY_EXPIRATION, });

            return {
                ...payload,
                accessToken: accessToken,
            };
        } catch (err) {
            throw new UnauthorizedException();
        }
    }
}
