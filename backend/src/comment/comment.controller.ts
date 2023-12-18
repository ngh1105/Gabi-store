import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard, GuestGuard } from 'src/auth/auth.guard';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get('count-comment/:idProduct')
    countComment(@Param('idProduct') idProduct: string) {
        try {
            return this.commentService.countCommentOfProduct(+idProduct);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get('find-related/:idProduct')
    findRelated(@Param('idProduct') idProduct: string) {
        try {
            return this.commentService.findRelated(+idProduct);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post()
    create(@Body() data: CreateCommentDto) {
        try {
            return this.commentService.create(data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get()
    findAll() {
        try {
            return this.commentService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        try {
            return this.commentService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
