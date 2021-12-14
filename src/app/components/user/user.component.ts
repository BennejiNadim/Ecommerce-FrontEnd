import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {UserService} from '../../Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];
  constructor(private _service:UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._service.fetchUsers().subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
    }) 
  }

}
