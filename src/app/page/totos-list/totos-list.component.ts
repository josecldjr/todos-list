import { TodosService } from './../../service/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/common/models/Todo.model';
import { MatDialog } from '@angular/material';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-totos-list',
  templateUrl: './totos-list.component.html',
  styleUrls: ['./totos-list.component.scss']
})
export class TotosListComponent implements OnInit {
  displayedColumns: string[] = [ 'createdAt','description', 'done', 'action' ];
  
  todosList: Todo[]

  constructor(
    private todosService: TodosService,
    private dialog: MatDialog
  ) {

     
   }

  ngOnInit() {


    this.getList()

  }

  // WIP =====
  getList() {
    this.todosService.getTodos().subscribe((todos) => {
      this.todosList = todos

      
    })
  }

  /**
   * Abre o modal para a criação de tarefas
   */
  openCreateTodoDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '60%'
    })
    // evento ao fechar dialogo
    .afterClosed().subscribe((dialogData) => {
      if (dialogData) {
        this.createTodoTask(dialogData)
      }
    })
     
  }

  /**
   * Cria uma tarefa
   * @param todo tarefa
   */
  createTodoTask(todo: Todo) {
    this.todosService.create(todo).subscribe((todoResult: Todo) => {
        this.addTodoToLocalList(todoResult)
    })
  }

  /**
   * Deleta uma tarefa pelo id
   * @param taskId id da tarefa
   */
  deleteTodoTask(taskId: string) {
    try {
      // remove na api
      this.todosService.delete(taskId)
      // remove na view
      this.removeTodoFromLocalList(taskId)
    } catch (error) {
      
      // tratamento de erro

    }
  }

  /**
   * Remove uma tafera da lista local buscando pelo id
   * @param taskId id da teafa
   */
  removeTodoFromLocalList(taskId: string) {
    _.remove(this.todosList, {
        _id: taskId
    });

  }

  /**
   * Adiciona uma tarefa à lista local
   * @param todo tarefa
   */
  addTodoToLocalList(todo: Todo) {
    this.todosList.push(todo)
  }

}
