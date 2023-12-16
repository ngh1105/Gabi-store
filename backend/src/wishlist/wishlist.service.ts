import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { UserService } from 'src/user/user.service';
import { WishlistDto } from './dto/wishlist.dto';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class WishlistService {

    constructor(
        @Inject('WISHLIST_REPOSITORY')
        private wishlistRepository: typeof Wishlist,

        private userService: UserService,
    ) { }

    async isLiked(idUser: number, idProduct: number) {
        const record = await this.wishlistRepository.findOne({
            where: {
                userId: idUser,
                productId: idProduct
            },
        });

        if (record) {
            return true;
        }

        return false;
    }

    async like(data: CreateWishlistDto) {
        const isExists = await this.userService.isExists(data.userId);
        if (!isExists) {
            throw new NotFoundException('User is not exist');
        }

        const isLiked = await this.wishlistRepository.findOne<Wishlist>({
            where: {
                userId: data.userId,
                productId: data.productId,
            }
        });

        if (isLiked) {
            return 'You already liked this product';
        }

        const record = await this.wishlistRepository.create({
            userId: data.userId,
            productId: data.productId,
        });

        const retData = await record.save();
        return new WishlistDto(retData);
    }

    async unlike(data: CreateWishlistDto) {
        const isExists = await this.userService.isExists(data.userId);
        if (!isExists) {
            throw new NotFoundException('User is not exist');
        }

        const isLiked = await this.wishlistRepository.findOne<Wishlist>({
            where: {
                userId: data.userId,
                productId: data.productId,
            }
        });

        if (!isLiked) {
            return 'You already unliked this product';
        }

        const record = await this.wishlistRepository.findOne<Wishlist>({
            where: {
                userId: data.userId,
                productId: data.productId,
            }
        });

        await record.destroy();
        return "Unliked successfully";
    }

    async findAllByUser(idUser: number, user: any) {
        if (idUser !== user.userId) {
            throw new UnauthorizedException("You cannot not view others wishlist");
        }

        const data = await this.wishlistRepository.findAll<Wishlist>({
            where: { userId: idUser },
            include: [{
                model: Product,
                attributes: ['name', 'price', 'imageUrl']
            }],
            order: [
                ['id', 'DESC']
            ]
        });

        return data;
    }
}
