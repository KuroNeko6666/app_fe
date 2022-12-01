import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterInterface } from 'src/app/model/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:3000/api`;


  register(data: RegisterInterface) : Observable<any> {
    return this.http.post<RegisterInterface>(this.baseURL, data);
  }

}
