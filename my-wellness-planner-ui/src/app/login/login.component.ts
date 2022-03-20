import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    stayLoggedIn: [false]
  }, { updateOn: 'submit'});
  loginResponse: LoginResponse;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.status === 'VALID') {
      const request: LoginRequest = {
        email: this.email.value,
        password: this.password.value
      };
      this.getLoginResponse(request);
      console.log(this.loginResponse);
    }
  }

  getLoginResponse(loginForm: LoginRequest) {
    return this.loginService.postLogin(loginForm)
      .subscribe(data => this.loginResponse =  {...data});
  }
}
