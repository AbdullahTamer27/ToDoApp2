import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent{
  form= new FormGroup({
    hi : new FormControl('',[Validators.required,Validators.minLength(1)])
  });

  toDoItems = [
    {"name":"testsubject" , "isDone": false, "valid":false}
  ]
  addItems(item:any){
    let newObj = {"name":item.value, "isDone": false, "valid":true}
    this.toDoItems.push(newObj);
    item.value = null;
  }

  deleteItem(item:any){
    let index = this.toDoItems.indexOf(item);
    this.toDoItems.splice(index,1);
  }

  changeIsDone(item:any){
    item.isDone = !item.isDone;
  }
}
