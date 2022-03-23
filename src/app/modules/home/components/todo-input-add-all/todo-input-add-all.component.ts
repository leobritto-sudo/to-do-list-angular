import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-all',
  templateUrl: './todo-input-add-all.component.html',
  styleUrls: ['./todo-input-add-all.component.scss']
})
export class TodoInputAddAllComponent implements OnInit {

  @Output() public emiterItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim()

    if(this.addItemTaskList != '') {
      this.emiterItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
    }
  }
}
