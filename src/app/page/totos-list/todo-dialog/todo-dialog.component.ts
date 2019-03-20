import { TodosService } from './../../../service/todos/todos.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../../../../../src/app/common/models/Todo.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {

  /** Model para leitura dos inputs */
  @Input()
  todo: Todo = {
    done: false,
    description: ''
  }

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {}

  ngOnInit() {
  }

  /**
   * Ação do botão de criar
   */
  save()  { 
    this.dialogRef.close(this.todo)
  }

  /**
   * Ação do botão de fechar
   */
  close() {
    this.dialogRef.close(null)
  }
}
