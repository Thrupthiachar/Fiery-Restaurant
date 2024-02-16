import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../Orders/models/item.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl:'./item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  foodItems: Item[] = [];

  constructor(private foodItemService: ItemService) {}

  ngOnInit(): void {
    this.foodItemService.getFoodItems().subscribe(foodItems => {
      this.foodItems = foodItems;
    });
  }

}
