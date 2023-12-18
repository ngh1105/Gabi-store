import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRegisterDto } from './dto/user-register.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ACCESS_KEY_EXPIRATION, JWT_SECRET, REFRESH_KEY_EXPIRATION } from './auth.constants';
import { MailService } from 'src/mail/mail.service';
import { API_URL } from 'src/app.contants';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private mailService: MailService,
    ) { }

    async signIn(data: UserLoginDto, res: Response): Promise<any> {

        const user = await this.userService.findOneByEmail(data.email);

        const validPassword = await this.userService.comparePassword(data.password, user.password);
        if (!validPassword) {
            throw new UnauthorizedException('Password is not correct');
        }

        if (user.isEmailVerified !== true) {
            return {
                isEmailVerified: false,
            }
        }

        const payload = {
            userId: user.id,
            email: user.email,
            role: user.role,
            avatarUrl: user.avatarUrl,
            phoneNumber: user.phoneNumber,
            address: user.address,
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

        const res = await this.userService.create(createDto);

        // verify link is `${API_URL}/mail/verify-user?id=${res.id}`

        const subject = "Xác nhận địa chỉ email của bạn với Gabi Store";
        const html = `<!DOCTYPE html>
<html>
<head>
    <title>Xác nhận email</title>
</head>
<body>
    <h1>Chào mừng bạn đến với Gabi Store!</h1>
    <p>Chúng tôi rất vui khi bạn tham gia cùng chúng tôi. Để hoàn tất quá trình đăng ký, vui lòng xác nhận địa chỉ email của bạn.</p>
    <p>Click vào link dưới đây để xác nhận:</p>
    <p><a href="${API_URL}/mail/verify-user?id=${res.id}">Xác nhận email</a></p>
    <p>Nếu bạn không đăng ký tài khoản này, vui lòng bỏ qua email này.</p>
    <p>Trân trọng,</p>
    <p>Đội ngũ Gabi Store</p>
</body>
</html>`;

        this.mailService.sendMail(data.email, subject, html);

        return res;
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
                phoneNumber: tokenData.phoneNumber,
                address: tokenData.address,
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
