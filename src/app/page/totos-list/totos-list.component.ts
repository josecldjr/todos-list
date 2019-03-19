import { TodosService } from './../../service/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/common/models/Todo.model';

@Component({
  selector: 'app-totos-list',
  templateUrl: './totos-list.component.html',
  styleUrls: ['./totos-list.component.scss']
})
export class TotosListComponent implements OnInit {
  displayedColumns: string[] = [ 'createdAt','description', 'done', 'action' ];
  
  todosList: Todo[]

  constructor(
    private todosService: TodosService
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

}
