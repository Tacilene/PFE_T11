import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
   url = "http://localhost:3000/login"

   login(user: User): Observable<any>{
      return this.httpClient.post(this.url, JSON.stringify(user),{
       headers: new HttpHeaders({'content-Type': 'application/json'}),
       observe: "response"
      })
    }
}
