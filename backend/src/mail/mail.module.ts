import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { MailController } from './mail.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [UserModule],
    providers: [MailService, ConfigService],
    exports: [MailService],
    controllers: [MailController]
})
export class MailModule { }
