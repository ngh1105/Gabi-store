import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UserRole } from '../user.constants';

@Table
export class User extends Model {
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
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fullName: string;

    @Column({
        type: DataType.ENUM(...Object.values(UserRole)),
        defaultValue: UserRole.GUEST,
    })
    role: UserRole;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    avatarUrl: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "",
    })
    address: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    isEmailVerified: boolean;
}
