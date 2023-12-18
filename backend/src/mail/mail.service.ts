import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { Options } from 'nodemailer/lib/smtp-transport';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MailService {
    constructor(
        private readonly configService: ConfigService,
        private readonly mailerService: MailerService,
        private readonly userService: UserService,
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
}
