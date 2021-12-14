import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  cartList:Array<any>=[];
  products:any = [];
  selectedProduct:any ;
  constructor(private _service:ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._service.fetchProducts().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;

    }) 
  }
  addToCart(product)
  {
    this.cartList=JSON.parse(localStorage.getItem('cartProducts'));
    this.cartList.push(product);
  //  console.log(this.cartList);
    localStorage.setItem("cartProducts",JSON.stringify(this.cartList)) ;
  }

}


