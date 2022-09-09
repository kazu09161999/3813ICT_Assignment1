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


  constructor(private router:Router) {

  }

  ngOnInit():void {

  }

  public logout(){
    localStorage.clear();
    //window.location.reload(); //refresh the current page
    //+redirect to login page?
    //window.location.reload(); //refresh the current page
    this.router.navigateByUrl('login');

  }

}
