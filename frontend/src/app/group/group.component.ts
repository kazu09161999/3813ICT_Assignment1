import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  groupObj: GroupObj;
  sortBy: string;
  searchText: string;
  groupArr : GroupObj[] = [];

  constructor() {
    this.groupObj = new GroupObj();
    this.searchText = '';
    this.sortBy = '';
   }

  ngOnInit(): void {
    this.getAllGroups();
  }
  onSave() {
    const isData = localStorage.getItem("GroupData");
     if(isData == null) {
      const newArr = [];
      this.groupObj.GroupId = 0;
      newArr.push(this.groupObj);
      localStorage.setItem("GroupData", JSON.stringify(newArr));
     } else {
      const oldData = JSON.parse(isData);
      const newId =oldData.length + 1;
      this.groupObj.GroupId = newId;
      oldData.push(this.groupObj);
      localStorage.setItem("GroupData", JSON.stringify(oldData));
     }
     this.groupObj = new GroupObj();
     this.getAllGroups();
  }

  getAllGroups() {
    const isData = localStorage.getItem("groupData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      this.groupArr = localData;
     }
  }

  onEdit(item: GroupObj) {
    this.groupObj = item;
  }
  onDelete(item: GroupObj) {
    const isData = localStorage.getItem("GroupData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
         if (localData[index].GroupId == item.GroupId) {
          localData.splice(0,1);
         }
      }
      localStorage.setItem("GroupData", JSON.stringify(localData));
      this.getAllGroups();
     }

  }

}

export class GroupObj {
  GroupId: number;
  GroupName: string;
  Channel : string;
 
  constructor() {
    this.GroupId = 0;
    this.GroupName= "";
    this.Channel="";


  }
}

