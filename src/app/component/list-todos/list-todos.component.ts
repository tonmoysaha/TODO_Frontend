import {Component, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Walk need to done', false, new Date()),
    new Todo(2,'Walk need to done', false, new Date()),
    new Todo(3,'Walk need to done', false, new Date()),
    new Todo(4,'Walk need to done', false, new Date()),
    new Todo(5,'Walk need to done', false, new Date())
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
