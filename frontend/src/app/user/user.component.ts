import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userObj: UserObj;
  sortBy: string;
  searchText: string;
  userArr : UserObj[] = [];

  constructor() {
    this.userObj = new UserObj();
    this.searchText = '';
    this.sortBy = '';
   }

  ngOnInit(): void {
  }
  onSave() {
    this.userArr.push(this.userObj);
  }

  getAllUsers() {

  }

}

export class UserObj {
  UserId: number;
  UserName: string;
  Password: string;
  Email: string;
  Role: string;
  constructor() {
    this.UserId = 0;
    this.UserName= "";
    this.Password="";
    this.Email= "";
    this.Role= "";

  }
}
