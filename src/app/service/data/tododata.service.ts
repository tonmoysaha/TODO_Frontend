import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../shared/todo';


@Injectable({
  providedIn: 'root'
})
export class TododataService {

  todo: Todo;
  constructor(private httpClient: HttpClient) {
  }

  retriveAllTodos(username) {
    const url = `http://localhost:8080/users/${username}/todos`;
    return this.httpClient.get<Todo[]>(url);
  }

  deleteTodo(username, id) {
    const url = `http://localhost:8080/users/${username}/todos/${id}`;
    return this.httpClient.delete(url);
  }

  updateTodo(username, id , todo) {
    const url = `http://localhost:8080/users/${username}/todos/${id}`;
    return this.httpClient.put<Todo>(url,todo);
  }

  createTodo(username, todo) {
    console.log(todo);
    const url = `http://localhost:8080/users/${username}/todos`;
    return this.httpClient.post<Todo>(url,todo);
  }

  retriveTodo(): Todo{
    return this.todo;
  }

   getTodo(todo) {
    this.todo = todo;
  }
}
