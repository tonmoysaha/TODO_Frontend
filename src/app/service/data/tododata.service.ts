import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../shared/todo';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(private httpClient: HttpClient) { }

  retriveAllTodos(username){
    const url = `http://localhost:8080/users/${username}/todos`
    return this.httpClient.get<Todo[]>(url);
  }

  deleteTodo(username, id){
    const url = `http://localhost:8080/users/${username}/todos/${id}`
    return this.httpClient.delete(url);
  }
}
