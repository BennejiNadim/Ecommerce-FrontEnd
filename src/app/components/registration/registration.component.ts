import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  constructor(private _service: RegistrationService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['',Validators.required]
    });
  }
  registerUser()
  {
    
    this._service.registerUser(this.form.value).subscribe(resp => {
      //console.log(resp.headers.get('Authorization'));
      console.log('success');
      
      //router
    });
  }

}
