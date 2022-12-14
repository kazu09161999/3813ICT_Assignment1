import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    "username":"",
    "password":""
  };

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public login(){


    console.log(this.user);

    this.httpClient.post(BACKEND_URL + '/login',{"username":this.user.username,"pwd":this.user.password })
// this.httpClient.post(BACKEND_URL + '/login', user)
    .subscribe((data:any)=>{
      // alert("posting: " +JSON.stringify(user));

      // alert("ostRes: " +JSON.stringify(data));
      console.log(data);

      if (data.ok){
        alert("correct");
        localStorage.setItem('username', data.username);
        localStorage.setItem('pwd', data.pwd);
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        localStorage.setItem('role', data.role);

        this.router.navigateByUrl("/profile");
      }
      else {
        alert("username or password incorrect");
      }

    })
  }

}
