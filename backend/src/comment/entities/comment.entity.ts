import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Comment extends Model {

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
}
