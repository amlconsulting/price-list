import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { SortPipe } from '../pipes/sort.pipe';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';

@Component({
  selector: 'app-prices',
  templateUrl: '../views/prices.component.html',
  providers: [ItemsService]
})
export class PricesComponent {  
  items: Observable<Item[]>;

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.getItems();

    console.log(this.items);
  } 

}