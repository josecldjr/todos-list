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
  // WIP
  create() {
    
  }
  
  /**
   * Retorna uma lista de Todos
   */
  getTodos(): Observable<Todo[]> {
    const endpoint = endpoints.todos.default

    return this.http.get(endpoint) as Observable<Todo[]>
  }

  // WIP
  update() {

  }

  // WIP
  delete() {

  }


}
