import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, InternalServerErrorException, Req } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GuestGuard } from 'src/auth/auth.guard';

@ApiTags('wishlist')
@Controller('wishlist')
export class WishlistController {
    constructor(private readonly wishlistService: WishlistService) { }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Get('is-liked/:idUser/:idProduct')
    isLiked(@Param('idUser') idUser: string, @Param('idProduct') idProduct: string) {
        try {
            return this.wishlistService.isLiked(+idUser, +idProduct);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post("like")
    like(@Body() data: CreateWishlistDto) {
        try {
            return this.wishlistService.like(data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post("unlike")
    unlike(@Body() data: CreateWishlistDto) {
        try {
            return this.wishlistService.unlike(data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Get('find-all/:idUser')
    findAllByUser(@Param('idUser') idUser: string, @Req() request: Request) {
        try {
            return this.wishlistService.findAllByUser(+idUser, request['user']);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
