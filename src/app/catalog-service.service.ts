import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
