import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/article';
import { ApplicationHttpClient } from '../extend/http-client';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    url = "/api/users";
   
   
    getUser(user:Login): Observable<Login[]> {
       console.log(user);
        return this.http.get<Login[]>(this.url + '?user=' +user.user);
    }    
}