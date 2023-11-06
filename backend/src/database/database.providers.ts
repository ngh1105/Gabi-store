import { Sequelize } from 'sequelize-typescript';
import { Blog } from 'src/blog/entities/blog.entity';
import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

const createRelationship = () => {

    Category.hasMany(Product, {
        onDelete: 'CASCADE',
        foreignKey: 'categoryId',
    });

    Product.belongsTo(Category, {
        foreignKey: 'categoryId',
    });

    User.hasMany(Blog, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
    });

    Blog.belongsTo(User, {
        foreignKey: 'userId',
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
            sequelize.addModels([Category, Product, User, Blog]);

            createRelationship();

            await sequelize.sync({ force: true });
            return sequelize;
        },
    },
];