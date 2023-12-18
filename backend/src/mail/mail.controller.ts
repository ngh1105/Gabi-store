import { Body, Controller, Get, InternalServerErrorException, Post, Query, Res, UseGuards } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { WEB_URL } from 'src/app.contants';
import { GuestGuard } from 'src/auth/auth.guard';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

@ApiTags('mail')
@Controller('mail')
export class MailController {
    constructor(readonly mailService: MailService) { }

    @Get('verify-user')
    async verifyUser(@Query('id') id: number, @Res() res: Response) {
        try {
            await this.mailService.verifyUser(id);
            return res.redirect(`${WEB_URL}/auth/login`);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Post('forgot-password')
    forgotPassword(@Body() data: ForgotPasswordDto) {
        try {
            return this.mailService.forgotPassword(data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get('reset-password')
    async resetPassword(@Query('resetToken') resetToken: string, @Res() res: Response) {
        try {
            await this.mailService.resetPassword(resetToken);
            return res.redirect(`${WEB_URL}/auth/login`);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
