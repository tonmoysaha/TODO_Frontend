import {Component, OnInit} from '@angular/core';

export  class TODO {

  constructor(
    public  id: number,
    public  description: string,
    public done: boolean,
    public targetDate: Date

  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new TODO(1,'Walk need to done', false, new Date()),
    new TODO(2,'Walk need to done', false, new Date()),
    new TODO(3,'Walk need to done', false, new Date()),
    new TODO(4,'Walk need to done', false, new Date()),
    new TODO(5,'Walk need to done', false, new Date())
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
