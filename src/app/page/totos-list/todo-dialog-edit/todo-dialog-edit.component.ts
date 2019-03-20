import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from 'src/app/common/models/Todo.model';

@Component({
  selector: 'app-todo-dialog-edit',
  templateUrl: './todo-dialog-edit.component.html',
  styleUrls: ['./todo-dialog-edit.component.scss']
})
export class TodoDialogEditComponent implements OnInit {

 
  /** Model para leitura de inputs */
  @Input()
  todoDescription: string
  /** Model para retorno */
  todo: Todo

  constructor(
    public dialogRef: MatDialogRef<TodoDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {selectedTask: Todo} ) {}

  ngOnInit() {
    this.todo = Object.assign({}, this.data.selectedTask)
    
  }

  /**
   * Ação do botão de salvar
   */
  edit()  { 
    this.todo.description = this.todoDescription
   
    this.dialogRef.close(this.todo)
  }

  /**
   * ação para o botão de fechar
   */
  close() {
    this.dialogRef.close(null)
  }

}
