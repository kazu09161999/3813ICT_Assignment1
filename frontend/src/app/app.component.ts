import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  userName=localStorage.getItem('username');

  role=localStorage.getItem('role');
  login=false;
  superadmin=false;
  groupAdmin=false;
  loginbutton=true;

  constructor(private router:Router) {

  }

  ngOnInit():void {
    this.SuperAdmin(),
    this.Status(),
    this.GroupAdmin()
  }

  public logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  public Status(){
    if(this.userName===null){
      this.login=false
      this.loginbutton=true;
    }else{
      this.login=true
      this.loginbutton=false;
    }
    if(this.login){
      console.log(this.login);
    }
    else{
      console.log(this.login);
    }
  }
  public SuperAdmin(){
    this.role=localStorage.getItem('role');
    if(this.role=="superadmin"){
      this.superadmin=true;
    }else{
      this.superadmin=false;
    }
  }
  public GroupAdmin(){
    this.role=localStorage.getItem('role');
    if(this.role==="groupadmin"){
      this.groupAdmin=true;
    }else{
      this.groupAdmin=false;
    }
  }

}
