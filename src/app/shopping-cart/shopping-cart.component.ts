import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ShoppingCartServiceService } from '../shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  arrCartItems: Item[] = [];

  constructor(private shoppingCartService: ShoppingCartServiceService) { }

  ngOnInit() {

    this.arrCartItems = this.shoppingCartService.items;

  }


  deleteItem(item: Item, x: number): void{

    item.quantity ++;
    this.arrCartItems.splice(x, 1);
    
  }



}
