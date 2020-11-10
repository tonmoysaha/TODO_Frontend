import {Component, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TododataService} from '../../service/data/tododata.service';
import {Router} from '@angular/router';
import {JwtAuthenticationServiceService} from '../../service/jwt-authentication-service.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string;
    // [
    // new Todo(1,'Walk need to done', false, new Date()),
    // new Todo(2,'Walk need to done', false, new Date()),
    // new Todo(3,'Walk need to done', false, new Date()),
    // new Todo(4,'Walk need to done', false, new Date()),
    // new Todo(5,'Walk need to done', false, new Date())
    // ];

  constructor(private todoService: TododataService,
              private router: Router,
              private jwtAuthService: JwtAuthenticationServiceService) {
  }

  ngOnInit(): void {
    this.receiveAllTodo();
  }

  receiveAllTodo(){
    this.todoService.retriveAllTodos(this.jwtAuthService.getAuthencatedUser()).subscribe(response => {
      this.todos = response;
    })

  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('opi', id).subscribe(response => {
      this.message = `The Todo of Id ${id} Deleted Successfully`;
      this.receiveAllTodo();

    })
  }

  updateTodo(id: number, todo: Todo) {
    this.todoService.getTodo(todo);
    this.router.navigate(['todos', id]);
  }

  createTodo() {
    this.router.navigate(['todos', -1]);
  }
}
