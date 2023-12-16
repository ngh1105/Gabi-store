import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { CommentDto } from './dto/comment.dto';
import { BillDetailService } from 'src/bill-detail/bill-detail.service';

@Injectable()
export class CommentService {
    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentRepository: typeof Comment,

        private userService: UserService,
        private billDetailService: BillDetailService
    ) { }

    async countCommentOfProduct(idProduct: number) {
        const count = await this.commentRepository.count({
            where: {
                productId: idProduct
            }
        });

        return count;
    }

    async findRelated(idProduct: number) {
        const comments = await this.commentRepository.findAll({
            where: { productId: idProduct },
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: ['fullName', 'avatarUrl']
            }]
        });

        return comments;
    }

    async create(data: CreateCommentDto) {
        const isExists = await this.userService.isExists(data.userId);
        if (!isExists) {
            throw new NotFoundException('User is not exist');
        }

        const isBought = await this.billDetailService.isBought(data.userId, data.productId);
        if (!isBought) {
            throw new NotFoundException('You have not bought this product');
        }

        const record = await this.commentRepository.create({
            userId: data.userId,
            productId: data.productId,
            content: data.content,
        });

        const retData = await record.save();
        return new CommentDto(retData);
    }
}
