import { Sequelize } from 'sequelize-typescript';
import { BillDetail } from 'src/bill-detail/entities/bill-detail.entity';
import { Bill } from 'src/bill/entities/bill.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Category } from 'src/category/entities/category.entity';
import { Comment } from 'src/comment/entities/comment.entity';
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

    User.hasMany(Bill, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
    });

    Bill.belongsTo(User, {
        foreignKey: 'userId',
    });

    Bill.hasMany(BillDetail, {
        onDelete: 'CASCADE',
        foreignKey: 'billId',
    });

    BillDetail.belongsTo(Bill, {
        foreignKey: 'billId',
    });

    Product.hasMany(BillDetail, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
    });

    BillDetail.belongsTo(Product, {
        foreignKey: 'productId',
    });

    User.hasMany(Comment, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
    });

    Comment.belongsTo(User, {
        foreignKey: 'userId',
    });

    Product.hasMany(Comment, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
    });

    Comment.belongsTo(Product, {
        foreignKey: 'productId',
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
            sequelize.addModels([Category, Product, User, Blog, Bill, BillDetail, Comment]);

            createRelationship();

            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];