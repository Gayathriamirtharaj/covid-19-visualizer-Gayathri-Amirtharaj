import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {User} from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(private userService: UserService){

  }
    ngOnInit():void{this.reset();}
     
    reset(form?:NgForm){
      if(form !=null)
      form.reset();
      this.user={
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
    OnSubmit(form: NgForm) {
      this.userService.register(form.value)
        .subscribe((data: any) => {
          console.log(form.value);
        });}
        }        

