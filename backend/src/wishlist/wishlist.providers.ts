import { Wishlist } from './entities/wishlist.entity';

export const wishlistProviders = [
    {
        provide: 'WISHLIST_REPOSITORY',
        useValue: Wishlist,
    },
];