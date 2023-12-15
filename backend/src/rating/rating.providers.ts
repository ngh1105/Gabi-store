import { Rating } from './entities/rating.entity';

export const ratingProviders = [
    {
        provide: 'RATING_REPOSITORY',
        useValue: Rating,
    },
];