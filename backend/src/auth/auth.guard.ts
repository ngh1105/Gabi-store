import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    mixin,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { API_SECRET_KEY, JWT_SECRET } from './auth.constants';
import { UserRole } from 'src/user/user.constants';

function extractTokenFromHeader(request: Request): string | undefined {
    const token = request.headers.authorization;
    return token as string;
}

function extractKeyFromHeader(request: Request): string | undefined {
    const key = request.headers['api-key'];
    return key as string;
}

@Injectable()
export class GuestGuard implements CanActivate {
    constructor(
        private jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const key = extractKeyFromHeader(request);
        if (key && key === API_SECRET_KEY) {
            //console.log(key);
            return true;
        }

        const token = extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: JWT_SECRET
                }
            );
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;

        } catch {
            throw new UnauthorizedException({
                invalidToken: true,
            });
        }

        return true;
    }
}

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const key = extractKeyFromHeader(request);
        if (key && key === API_SECRET_KEY) {
            //console.log(key);
            return true;
        }

        const token = extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: JWT_SECRET
                }
            );

            request['user'] = payload;

            if (payload.role !== UserRole.ADMIN) {
                throw new UnauthorizedException();
            }

        } catch {
            throw new UnauthorizedException({
                invalidToken: true,
            });
        }

        return true;
    }
}