import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Rating extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    score: number;
}