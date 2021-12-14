import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css']
})
export class ShoppingCartDetailsComponent implements OnInit {

  cartProducts:Array<any>=[];
  totalPrice:number=0;
  itemCount:number;
  _homeComponent:HomeComponent
  constructor() {_homeComponent:HomeComponent }

  ngOnInit(): void {
    
    this.cartProducts=JSON.parse(localStorage.getItem('cartProducts'));
    console.log("updated cart :"+this.cartProducts);

  
    this.itemCount=this.cartProducts.length;
    for(let product of this.cartProducts)
    {
      this.totalPrice=this.totalPrice+product.prix;
    }
    console.log("price"+this.totalPrice);
  }
  plusItem(product)
  {
    this._homeComponent.addToCart(product);
  }
  minusItem(product)
  {
    
  }

}
