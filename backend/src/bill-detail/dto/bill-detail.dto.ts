import { BillDetail } from "../entities/bill-detail.entity";

export class BillDetailDto {
    
    billId: number;
    name: string;
    productId: number;
    quantity: number;
    price: number;
    imageUrl: string;

    constructor(
        billId: number, 
        name: string,
        productId: number,
        quantity: number,
        price: number, 
        imageUrl: string) {
        
        this.billId = billId;
        this.name = name;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
