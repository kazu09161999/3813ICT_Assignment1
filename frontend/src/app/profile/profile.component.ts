import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

const BACKEND_URL='http://localhost:3000';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any={
    e_username:null,
    e_birthdate:null,
    e_age:null,
    e_email:null,
    e_role:null,
    e_pwd:null
  }
  constructor() { }

  ngOnInit() {
  }

}
