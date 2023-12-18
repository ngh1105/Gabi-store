import { Controller, Get, Query, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { WEB_URL } from 'src/app.contants';

@ApiTags('mail')
@Controller('mail')
export class MailController {
    constructor(readonly mailService: MailService) { }

    @Get('verify-user')
    async verifyUser(@Query('id') id: number, @Res() res: Response) {
        await this.mailService.verifyUser(id);

        return res.redirect(`${WEB_URL}/auth/login`);
    }
}
