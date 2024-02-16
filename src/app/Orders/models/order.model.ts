import { Item } from "./item.model";

export interface Order {
    id: string;
    orderNo: number;
    contactName: string;
    orderDate: string;
    itemsOrdered: number; 
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
    items: Item[]; 
  }