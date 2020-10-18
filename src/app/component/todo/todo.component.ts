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
  todo: Todo;

  constructor(private todoService: TododataService,
              private activateRoute: ActivatedRoute,
              private routers: Router) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.todo = this.todoService.retriveTodo();
  }

  saveTodo() {
    if (this.id !== -1) {
      this.todoService.updateTodo('opi', this.id, this.todo).subscribe(
        response => {
          this.todo = response;
          this.routers.navigate(['todos']);
        });
    } else {
      this.todoService.createTodo('opi', this.todo).subscribe(response => {
        this.routers.navigate(['todos']);
      });
    }
  }
}
