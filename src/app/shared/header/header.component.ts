import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  user:any ;
  categories:any;
  constructor(private _service:ProductService,private router: Router ) { }

  ngOnInit(): void {
    this.user = jwt_decode(localStorage.getItem('token'));
    console.log(this.user.roles[0]);
    this._service.categories().subscribe((data: any[])=>{
   //   console.log(data);
      this.categories = data;
      

    }) 
    console.log(this.categories);

  }
  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
