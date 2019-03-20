import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDialogEditComponent } from './todo-dialog-edit.component';

describe('TodoDialogEditComponent', () => {
  let component: TodoDialogEditComponent;
  let fixture: ComponentFixture<TodoDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
