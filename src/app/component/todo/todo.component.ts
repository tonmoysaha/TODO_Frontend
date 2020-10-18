import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TododataService} from '../../service/data/tododata.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo = new Todo(null,'',false,new Date());

  constructor(private todoService: TododataService,
              private activateRoute: ActivatedRoute,
              private routers: Router) {
  }

  ngOnInit(): void {
    this.id = +this.activateRoute.snapshot.params['id'];

    if (this.id != -1) {
      this.todo = this.todoService.retriveTodo();
    }
    console.log(this.id);
    console.log(this.todo);
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('opi', this.todo).subscribe(
        response => {
          console.log(response);
          this.routers.navigate(['todos']);
        });
      console.log(this.todo.description);
    } else {
      this.todoService.updateTodo('opi', this.id, this.todo).subscribe(
        response => {
          this.todo = response;
          this.routers.navigate(['todos']);
        });
    }
  }
}
