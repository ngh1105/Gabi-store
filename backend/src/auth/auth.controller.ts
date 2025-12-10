import { Body, Controller, Post, Res, Req, InternalServerErrorException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    signIn(@Body() userLoginDto: UserLoginDto, @Res({ passthrough: true }) response: Response) {
        try {
            return this.authService.signIn(userLoginDto, response);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Post('/register')
    register(@Body() userRegisterDto: UserRegisterDto) {
        try {
            return this.authService.register(userRegisterDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Post('/refresh')
    refresh(@Req() request: Request) {
        try {
            return this.authService.refresh(request);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Post('/logout')
    logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
        try {
            response.clearCookie('refreshToken')
            return "Logged out successfully";
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
