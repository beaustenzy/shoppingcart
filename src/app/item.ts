export class Item{
    productId: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    
    constructor(_product_id: number, _name: string, _description: string, _price: number, _quantity: number) {
        this.productId = _product_id; this.name = _name; this.description = _description; this.price = _price; this.quantity = _quantity;
      }
}