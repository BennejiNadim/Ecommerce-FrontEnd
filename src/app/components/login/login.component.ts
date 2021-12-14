import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  constructor(private _service:LoginService, private fb: FormBuilder,private router: Router ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }
  login()
  {
    
    
      this._service.loginUser(this.form.value).subscribe(resp => {
        //console.log(resp.headers.get('Authorization'));
        localStorage.setItem('token',resp.headers.get('Authorization'));
        this.router.navigate(['/home']);
        //router
      });
   
    }
}
