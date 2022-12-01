import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { LoginInterface } from 'src/app/model/login';
import { ResponseApi } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:3000/api`;


  login(data: LoginInterface) : Observable<any> {
    return this.http.post<LoginInterface>(this.baseURL, data);
  }
}
