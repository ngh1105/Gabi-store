import { Body, Controller, Post, Res, Req } from '@nestjs/common';
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
    signIn(@Body() userLoginDto: UserLoginDto, @Res({passthrough: true}) response: Response) {
        return this.authService.signIn(userLoginDto, response);
    }

    @Post('/register')
    register(@Body() userRegisterDto: UserRegisterDto) {
        return this.authService.register(userRegisterDto);
    }

    @Post('/refresh')
    refresh(@Req() request: Request) {
        return this.authService.refresh(request);
    }

    @Post('/logout')
    logout(@Req() request: Request, @Res({passthrough: true}) response: Response) {
        response.clearCookie('refreshToken')
        return "Logged out successfully";
    }
}
