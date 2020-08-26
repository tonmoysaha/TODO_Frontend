import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Walk need to done'},
    {id: 2, description: 'Walk need to done'},
    {id: 3, description: 'Walk need to done'},
    {id: 4, description: 'Walk need to done'}
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
