import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async signIn(data: UserLoginDto): Promise<any> {

        const user = await this.userService.findOneByEmail(data.email);

        const validPassword = await this.userService.comparePassword(data.password, user.password);
        if (!validPassword) {
            throw new UnauthorizedException('Password is not correct');
        }

        const payload = { 
            userId: user.id, 
            email: user.email,
            role: user.role,
        };

        return {
            ...payload,
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
}
