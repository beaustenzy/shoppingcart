import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CatalogServiceService } from '../catalog-service.service';
import { ShoppingCartServiceService } from '../shopping-cart-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  
  items: Item[];
  public searchText : string;
  public customerData : any;

  constructor(private catalogService: CatalogServiceService, 
              private shoppingCartService: ShoppingCartServiceService) { }

              
  ngOnInit() {

    this.getItems();

  }

  getItems(): void{

    this.catalogService.getItems().subscribe(items => this.items = items); 

  }


  addToCart(item: Item, num: number) {
    if(num > item.quantity)
      num = item.quantity;
    for(var _i = 0; _i < num; _i++){
      if(item.quantity>0)
      {
        item.quantity --;
        this.shoppingCartService.addItem(item);
      }
      else{
        alert(item.name + ' is sold out.');
      }
    }
  }


  addToCatalog(id: number, name: string, desc: string, price: number, qty: number) {

    var test: number;
    for(let item of this.items) {
      if(item.productId == id) {
        test = 1;
      }
  
    }
    if(test==1) {
      alert("Product ID already in use.");
    }
    else {

    this.items.push(
        new Item(id, name, desc, price, qty)
        );
    }
 
  }



}
