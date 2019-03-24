import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to Angular', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit to Korea', false, new Date()),
    // { id: 1, description: 'Learn to Angular' },
    // { id: 2, description: 'Become an Expert at Angular' },
    // { id: 3, description: 'Visit to Korea' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
