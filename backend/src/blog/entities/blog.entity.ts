import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Blog extends Model {

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
    title: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    thumbnail: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    description: string;

    @Column({
        type: DataType.TEXT('long'),
        defaultValue: "",
    })
    content: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;
}
