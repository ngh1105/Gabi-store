import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { MailController } from './mail.controller';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    providers: [MailService, ConfigService],
    exports: [MailService],
    controllers: [MailController]
})
export class MailModule { }
