import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name : string = 'John Doe'
  product = {
    name: 'iPhone X',
    price: 999,
    color: 'Red',
    discount :8.5,
    inStock : 0,
    pImage : "../../assets/iphone.png",
  };

  getDiscountedPrice() :number{
   return this.product.price - (this.product.price * this.product.discount /100)
  }
}
