import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Item } from '../models/item';

@Injectable()
export class ItemsService {

  constructor(private http: Http) {}

  getItems() {
    return this.http
      .get('../assets/items.json')
      .map(x => x.json());
  }

}