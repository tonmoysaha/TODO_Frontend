import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../shared/todo';
import {API_URL} from '../../constants';


@Injectable({
  providedIn: 'root'
})
export class TododataService {

  todo: Todo;
  constructor(private httpClient: HttpClient) {
  }

  retriveAllTodos(username) {
    const url = `${API_URL}/users/${username}/todos`;
    return this.httpClient.get<Todo[]>(url);
  }

  deleteTodo(username, id) {
    const url = `${API_URL}/users/${username}/todos/${id}`;
    return this.httpClient.delete(url);
  }

  updateTodo(username, id , todo) {
    const url = `${API_URL}/users/${username}/todos/${id}`;
    return this.httpClient.put<Todo>(url,todo);
  }

  createTodo(username, todo) {
    console.log(todo);
    const url = `${API_URL}/users/${username}/todos`;
    return this.httpClient.post<Todo>(url,todo);
  }

  retriveTodo(): Todo{
    return this.todo;
  }

   getTodo(todo) {
    this.todo = todo;
  }
}
