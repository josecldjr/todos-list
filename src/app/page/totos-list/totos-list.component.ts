import { TodosService } from './../../service/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/common/models/Todo.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import * as _ from 'lodash';
import { TodoDialogEditComponent } from './todo-dialog-edit/todo-dialog-edit.component';
import messages from './../../config/messages'
@Component({
  selector: 'app-totos-list',
  templateUrl: './totos-list.component.html',
  styleUrls: ['./totos-list.component.scss']
})
export class TotosListComponent implements OnInit {
  /** Colunas que serão mostradas */
  displayedColumns: string[] = [ 'createdAt','description', 'done', 'action' ];
  
  /** lista de tarefas */
  todosList: Todo[]

  /** Se a tabela está carregando */
  isLoading: boolean = false

  /** Se há alguma tarefa sendo criada */
  isCreateLoading: boolean = false

  constructor(
    private todosService: TodosService,
    private dialog: MatDialog,
    private messageService: MatSnackBar
  ) {

     
   }

  ngOnInit() {
    this.getList()

  }

  /**
   * Retorna uma lista de tarefas
   */
  getList() {
    this.isLoading = true

    this.todosService.getTodos().subscribe((todos) => {
      this.todosList = todos

      this.isLoading = false
    })
  }

  /**
   * Abre o modal para a criação de tarefas
   */
  openCreateTodoDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '60%',
    })
    // evento ao fechar dialogo
    .afterClosed().subscribe((dialogData) => {
      if (dialogData) {
        this.createTodoTask(dialogData)
      }
    })
     
  }

  /**
   * Abre um diálogo para a edição da tarefa (apenas a descrição)
   * @param todo tarefa que será editada
   */
  openEditTodoDialog(todo: Todo) {
    this.dialog.open(TodoDialogEditComponent, {
      data: {selectedTask: todo},
      minWidth: '60%'
    }).afterClosed().subscribe((dialogData: Todo) => {
        if (dialogData) {
          this.updateTodoTask(dialogData)
        }
    })
  }

  /**
   * Cria uma tarefa
   * @param todo tarefa
   */
  createTodoTask(todo: Todo) {
    this.isCreateLoading = true
    
    this.todosService.create(todo).subscribe((todoResult: Todo) => {
        this.addTodoToLocalList(todoResult)

        this.isCreateLoading = false

        // mensagem ao usuário
        this.messageService.open(messages.todos.created, 'Ok', {duration: 2000})
    }, (err) => {
      this.messageService.open(messages.todos.error, 'Ok', {duration: 2000})
    })
  }

  /**
   * Atualiza uma tarefa pelo id
   * @param todo tarefa
   */
  updateTodoTask(todo: Todo) {
    this.todosService.update(todo).subscribe((todo: Todo) => {
      this.updateTodoFromList(todo)

      // mensagem para o usuário
      this.messageService.open(messages.todos.updated, 'Ok', {duration: 2000})
    }, (err) => {
      this.messageService.open(messages.todos.error, 'Ok', {duration: 2000})
    })
  }

  /**
   * Alterna o estado de feito pra true ou false
   * @param todo tarefa
   */
  toggleDone(todo: Todo) {
    todo.done = !todo.done

    this.updateTodoTask(todo)
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

      // mensagem ao usuário
      this.messageService.open(messages.todos.deleted, 'Ok', {duration: 2000})
    } catch (error) {
      this.messageService.open(messages.todos.error, 'Ok', {duration: 2000})
    }
  }

  /**
   * Remove uma tafera da view buscando pelo id
   * @param taskId id da teafa
   */
  removeTodoFromLocalList(taskId: string) {
    _.remove(this.todosList, {
        _id: taskId
    });

  }
  
  /**
   * Atualiza uma tarefa da view 
   * @param todo tarefa
   */
  updateTodoFromList(todo: Todo) {
    this.todosList.forEach((e: Todo, i) => {
        if (e._id === todo._id) {
          this.todosList[i] = todo
        }

    })

  }

  /**
   * Adiciona uma tarefa à view 
   * @param todo tarefa
   */
  addTodoToLocalList(todo: Todo) {
    this.todosList.push(todo)
  }

}
