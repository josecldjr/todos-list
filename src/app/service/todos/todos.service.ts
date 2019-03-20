import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Todo } from 'src/app/common/models/Todo.model';

import endpoints from './../../config/endpoints';

/**
 * SERVICE
 * Service responsável por gerenciar TODO's
 */
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient,
    ) { }
  
  /** 
   * Cria uma tarefa na lista
   * @param todo tarefa
   */
  create(todo: Todo): Observable<Todo> {
    const endpoint = endpoints.todos.default

    return this.http.post(endpoint, todo) as Observable<Todo>
  }
  
  /**
   * Retorna uma lista de Todos
   */
  getTodos(): Observable<Todo[]> {
    const endpoint = endpoints.todos.default

    return this.http.get(endpoint) as Observable<Todo[]>
  }

  // WIP
  update(todo: Todo) {
    // const endpoint = endpoints.todos.get

    // return this.http.get(endpoint) as Observable<Todo[]>
  }

  /**
   * Deleta uma tarefa
   * @param id id da tarefa
   */
  async delete(id: string): Promise<void> {    
    const endpoint = endpoints.todos.get.replace(':id', id)

    await this.http.delete(endpoint).toPromise()
  }


}
