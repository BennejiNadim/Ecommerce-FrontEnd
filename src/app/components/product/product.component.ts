import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cartList:any=[];
  form: FormGroup;
  products = [];
  cartProducts:any;
   param = new HttpParams();
  
  constructor(private _service:ProductService, private fb: FormBuilder,private router: Router) { };


  ngOnInit(): void {
    this._service.fetchProducts().subscribe((data: any[])=>{
    //  console.log(data);
      this.products = data;
      
    }) 
    this.cartProducts=localStorage.getItem('cartProducts');
    console.log("updated cart :"+this.cartProducts);
  }
  Delete(id)
{
   this._service.deleteProduct(id).subscribe(data => {
    console.log(id);
    
})
this.router.navigate(['/products']);

}

}


