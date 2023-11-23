export class BillDetailDto {
    
    billId: number;
    productId: number;
    quantity: number;
    price: number;
    imageUrl: string;

    constructor(
        billId: number, 
        productId: number,
        quantity: number,
        price: number, 
        imageUrl: string) {
        
        this.billId = billId;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
