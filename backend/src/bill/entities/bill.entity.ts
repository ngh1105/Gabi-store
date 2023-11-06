import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Bill extends Model {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fullName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    totalPrice: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: string;
}
