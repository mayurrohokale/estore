import { Component } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../../types/order.type';

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss']
})
export class PastordersComponent {
  pastOrderProducts: PastOrderProduct[] = [
    {
      amount: 100,
      price: 50,
      productId: 1,
      productImage: 'img1.jpg',
      productName: 'Jacket',
      qty: 2,

    },
  ];

  pastOrder: PastOrder = {
    address: 'Address goes here',
    city: 'New Jersey',
    orderDate: '03/01/23',
    pin: '12345',
    state: 'NY',
    total: 100,
    userName: 'Pooja',
  };

  selectOrder(event: any){
    
  }
}
