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
    this.getAllUsers();
  }
  onSave() {
    const isData = localStorage.getItem("UserData");
     if(isData == null) {
      const newArr = [];
      this.userObj.UserId = 0;
      newArr.push(this.userObj);
      localStorage.setItem("UserData", JSON.stringify(newArr));
     } else {
      const oldData = JSON.parse(isData);
      const newId =oldData.length + 1;
      this.userObj.UserId = newId;
      oldData.push(this.userObj);
      localStorage.setItem("UserData", JSON.stringify(oldData));
     }
     this.userObj = new UserObj();
     this.getAllUsers();
  }

  getAllUsers() {
    const isData = localStorage.getItem("UserData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      this.userArr = localData;
     }
  }

  onEdit(item: UserObj) {
    this.userObj = item;
  }
  onDelete(item: UserObj) {
    const isData = localStorage.getItem("UserData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
         if (localData[index].UserId == item.UserId) {
          localData.splice(0,1);
         }
      }
      localStorage.setItem("UserData", JSON.stringify(localData));
      this.getAllUsers();
     }

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
