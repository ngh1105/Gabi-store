import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {
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

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    viewCount: number;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    description: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    categoryId: number;

    @Column({
        type: DataType.STRING,
        get: function () {
            return JSON.parse(this.getDataValue('colors'));
        },
        set: function (val) {
            return this.setDataValue('colors', JSON.stringify(val));
        }
    })
    colors: string[];

    @Column({
        type: DataType.STRING,
        get: function () {
            return JSON.parse(this.getDataValue('sizes'));
        },
        set: function (val) {
            return this.setDataValue('sizes', JSON.stringify(val));
        }
    })
    sizes: string[];
}