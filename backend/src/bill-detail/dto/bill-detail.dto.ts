import { BillDetail } from "../entities/bill-detail.entity";

export class BillDetailDto {

    id?: number;
    billId: number;
    name: string;
    productId: number;
    quantity: number;
    price: number;
    imageUrl: string;
    color: string;
    size: string;

    constructor(data: BillDetail) {

        this.billId = data.billId;
        this.name = data.name;
        this.productId = data.productId;
        this.quantity = data.quantity;
        this.price = data.price;
        this.imageUrl = data.imageUrl;
        this.color = data.color;
        this.size = data.size;
    }
}
