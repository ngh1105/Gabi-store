import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GuestGuard } from 'src/auth/auth.guard';
import { RatingDto } from './dto/rating.dto';

@ApiTags('rating')
@Controller('rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService) { }

    @Get('count-rating/:idProduct')
    countRating(@Param('idProduct') idProduct: string) {
        try {
            return this.ratingService.countRating(+idProduct);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post("add-score")
    addScore(@Body() ratingDto: CreateRatingDto) {
        try {
            return this.ratingService.addScore(ratingDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get('get-score/:idProduct')
    getScore(@Param('idProduct') idProduct: string) {
        try {
            return this.ratingService.getScore(+idProduct);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
