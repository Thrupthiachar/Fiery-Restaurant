import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Orders/models/item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:3000/orders'; 


  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }
}
