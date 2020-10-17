import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TododataService} from '../../service/data/tododata.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  constructor(private todoService: TododataService) { }

  ngOnInit(): void {
    this.todo = new Todo(1,'', false, new Date());
    this.todo =  this.todoService.retriveTodo();
  }

  saveTodo() {

  }
}
