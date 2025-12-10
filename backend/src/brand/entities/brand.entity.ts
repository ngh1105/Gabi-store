import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Brand extends Model {
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
    name: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    imageUrl: string;
}