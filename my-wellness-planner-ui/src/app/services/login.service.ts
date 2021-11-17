import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiUrl;
    loginEndpoint = environment.loginEndpoint;
    constructor(private http: HttpClient) { }

    performLogin(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
        return this.http.post<LoginResponse>(this.url + this.loginEndpoint, loginRequest, {observe: 'response'});
    }
}

