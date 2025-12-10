import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { Options } from 'nodemailer/lib/smtp-transport';
import { UserService } from 'src/user/user.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET, RESET_PASSWORD_KEY_EXPIRATION } from 'src/auth/auth.constants';
import { API_URL } from 'src/app.contants';

@Injectable()
export class MailService {
    constructor(
        private readonly configService: ConfigService,
        private readonly mailerService: MailerService,
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }

    private async setTransport() {
        const OAuth2 = google.auth.OAuth2;
        const oauth2Client = new OAuth2(
            this.configService.get('CLIENT_ID'),
            this.configService.get('CLIENT_SECRET'),
            'https://developers.google.com/oauthplayground',
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const accessToken: string = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject('Failed to create access token');
                }
                resolve(token);
            });
        });

        const config: Options = {
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: this.configService.get('EMAIL'),
                clientId: this.configService.get('CLIENT_ID'),
                clientSecret: this.configService.get('CLIENT_SECRET'),
                accessToken,
            },
        };

        this.mailerService.addTransporter('gmail', config);
    }

    public async sendMail(receive: string, subject: string, content: string) {
        await this.setTransport();
        this.mailerService
            .sendMail({
                transporterName: 'gmail',
                to: receive, // list of receivers
                from: '"Gabi Store" <gabi-store@gmail.com>', // sender address
                subject: subject, // Subject line
                html: content,
            })
            .then((success) => {
                //console.log("Sent successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async verifyUser(id: number) {
        return await this.userService.verifyUser(id);
    }

    private generateRandomString(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    async forgotPassword(data: ForgotPasswordDto) {

        const user = await this.userService.findOneByEmail(data.email);
        if (!user) {
            throw new NotFoundException("Email is not exist");
        }

        if (!user.isEmailVerified) {
            throw new NotFoundException("Email is not verified");
        }

        const newPassword = this.generateRandomString(6);

        const payload = {
            userId: user.id,
            newPassword: newPassword,
        };

        const resetToken = await this.jwtService.signAsync(payload, { expiresIn: RESET_PASSWORD_KEY_EXPIRATION, });

        // reset password url is `${API_URL}/mail/reset-password?userId=${user.id}&newPassword=${newPassword}&resetToken=${resetToken}`

        const subject = "Chào mừng bạn trở lại Gabi Store";
        const html = `<!DOCTYPE html>
<html>
<head>
    <title>Đặt lại mật khẩu</title>
</head>
<body>
    <h1>Chào mừng bạn trở lại Gabi Store!</h1>
    <p>Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn. Mật khẩu mới của bạn là: <strong>${newPassword}</strong></p>
    <p>Click vào link dưới đây để kích hoạt mật khẩu mới:</p>
    <p><a href="${API_URL}/mail/reset-password?resetToken=${resetToken}">Kích hoạt mật khẩu mới</a></p>
    <p><strong>Lưu ý:</strong> Link kích hoạt này chỉ có hiệu lực trong vòng 10 phút.</p>
    <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
    <p>Trân trọng,</p>
    <p>Đội ngũ Gabi Store</p>
</body>
</html>`;

        this.sendMail(data.email, subject, html);

        return "Email sent successfully";
    }

    async resetPassword(resetToken: string) {
        try {
            const tokenData = await this.jwtService.verifyAsync(
                resetToken,
                {
                    secret: JWT_SECRET
                }
            );

            await this.userService.resetPassword(tokenData.userId, tokenData.newPassword);

            return "Resetted succesfully";
        } catch (err) {
            throw new UnauthorizedException();
        }
    }
}
