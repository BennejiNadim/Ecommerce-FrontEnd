import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  constructor(private _service:ProductService) { }

  ngOnInit(): void {
    this._service.fetchCategories().subscribe((data: any[])=>{
      console.log(data);
      this.categories = data;
    })
  }

}
