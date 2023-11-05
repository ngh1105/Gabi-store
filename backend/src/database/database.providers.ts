import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';

const createRelationship = () => {

}

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'gabi_store',
            });

            // Add model here
            sequelize.addModels([Category]);

            createRelationship();

            await sequelize.sync({ force: true });
            return sequelize;
        },
    },
];