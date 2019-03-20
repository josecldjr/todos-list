import { TodosService } from './../../service/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/common/models/Todo.model';
import { MatDialog } from '@angular/material';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';

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

      console.log(this.todosList);
      
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

  deleteTodoTask(taskId) {
    
  }
  /**
   * Adiciona uma tarefa à lista local
   * @param todo tarefa
   */
  addTodoToLocalList(todo: Todo) {
    this.todosList.push(todo)
  }

}
