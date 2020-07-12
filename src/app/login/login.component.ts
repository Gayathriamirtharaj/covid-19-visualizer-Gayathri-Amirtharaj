import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean=false;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
  }
  OnSubmit(email,password){
    this.userService.login(email,password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/navigation']);
    },
    (err:HttpErrorResponse)=>{
      this.isLogin=true;
    });
  }

}
