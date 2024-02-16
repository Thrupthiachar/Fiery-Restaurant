import { Component } from '@angular/core';
import { Item } from '../../../Orders/models/item.model';
import { ItemService } from '../../../services/item.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // foodItems: Item[] = [];

  // constructor(private foodItemService: ItemService) {}

  // ngOnInit(): void {
  //   this.foodItemService.getFoodItems().subscribe(foodItems => {
  //     this.foodItems = foodItems;
  //   });
  // }
  foodItems=[
    {name:"Pizza",price:"200",imageUrl:"https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA"},
    {name:"Burger",price:"250",imageUrl:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900"},
    {name:"French Fries",price:"100",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqn3VEOSzEuZyeffznN2-B2UsJaEa1AAWs2g&usqp=CAU"},
    {name:"Salad",price:"250",imageUrl:"https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-superJumbo.jpg"}
  ]
}
