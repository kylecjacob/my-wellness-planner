import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private client: LoginService, private router: Router) { }
  
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    stayLoggedIn: [false]
  }, { updateOn: 'submit'});
  serverError: boolean = false;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginForm.status === 'VALID') {
      const request: LoginRequest = {
        email: this.email.value,
        password: this.password.value
      };
      this.client.performLogin(request).subscribe({
        next: (response: HttpResponse<LoginResponse>) => {
          if (response.ok) {
            localStorage.setItem('token', response.body.token);
          }
        },
        error: error => {
          this.serverError = true;
          // TODO: log error
        }
      });
    }
  }
}
