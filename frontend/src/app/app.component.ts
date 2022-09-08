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

  ngOnInit() {
    // this.getDataFromAPI();
  }

  // getDataFromAPI() {
  //   this.service.getData().subscribe((response) => {
  //     console.log('Response from API is ', response)
  //   }, (error) => {
  //     console.log('Erroe is ', error)
  //   })
  // }
}
