import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartServiceService {

  items: Item[] = [];

  addItem(item: Item) {

    this.items.push(item);

  }

  constructor() { }
}
