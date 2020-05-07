import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-app-todolist',
  templateUrl: './app-todolist.component.html',
  styleUrls: ['./app-todolist.component.css']
})
export class AppTodolistComponent implements OnInit {

  constructor(public storage: StorageService) {
  }

  public keyword: string;

  public todolist: any[] = [];

  ngOnInit(): void {
    const list = this.storage.get('todolist');
    if (list){
      this.todolist = list;
    }
  }

  doAdd(e){
    if (e.keyCode == 13){
      this.todolist.push({
        title: this.keyword,
        status: 0
      });
      this.keyword = '';

      this.storage.set('todolist', this.todolist);
    }
  }

  deleteData(key){
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }

  checkboxChange(){
    this.storage.set('todolist', this.todolist);
  }

}
