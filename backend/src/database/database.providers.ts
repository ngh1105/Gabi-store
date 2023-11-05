import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/product/entities/product.entity';

const createRelationship = () => {

    Category.hasMany(Product, {
        onDelete: 'CASCADE',
        foreignKey: 'categoryId',
    });

    Product.belongsTo(Category, {
        foreignKey: 'categoryId',
    });
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
            sequelize.addModels([Category, Product]);

            createRelationship();

            await sequelize.sync({ force: true });
            return sequelize;
        },
    },
];