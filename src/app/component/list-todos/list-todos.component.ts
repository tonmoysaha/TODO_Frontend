import {Component, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TododataService} from '../../service/data/tododata.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
    // [
    // new Todo(1,'Walk need to done', false, new Date()),
    // new Todo(2,'Walk need to done', false, new Date()),
    // new Todo(3,'Walk need to done', false, new Date()),
    // new Todo(4,'Walk need to done', false, new Date()),
    // new Todo(5,'Walk need to done', false, new Date())
    // ];

  constructor(private todoService: TododataService) {
  }

  ngOnInit(): void {
    this.todoService.retriveAllTodos('opi').subscribe(response => {
      this.todos = response;
    })
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('opi', id).subscribe(response => {
      this.message = `The Todo of Id ${id} Deleted Successfully`;
    })
  }
}
