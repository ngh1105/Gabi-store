import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { BillStatus, PaymentMethod } from '../bill.constants';

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
    email: string;

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
    totalPrice: number;

    @Column({
        type: DataType.ENUM(...Object.values(PaymentMethod)),
        defaultValue: PaymentMethod.COD,
    })
    paymentMethod: PaymentMethod;

    @Column({
        type: DataType.ENUM(...Object.values(BillStatus)),
        defaultValue: BillStatus.PENDING,
    })
    status: BillStatus;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;
}
