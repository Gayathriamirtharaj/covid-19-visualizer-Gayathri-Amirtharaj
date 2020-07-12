import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
//import  'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = "https://zen-user-api.herokuapp.com";

  constructor(private http: HttpClient) { }

register(u : User):Observable<any>{
  const data: User = {
    "firstName":u.firstName,
    "lastName":u.lastName,
    "email":u.email,
    "password":u.password
  }
  var rqhr = new HttpHeaders({'No-Auth':'True'});
  return this.http.post("https://zen-user-api.herokuapp.com/users/register",data,{headers:rqhr});
  
}
login(email,password){
  const data:any={
    "email":email,
    "password":password
  }
  var rqhr = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post("https://zen-user-api.herokuapp.com/users/authenticate",data);
}
}

