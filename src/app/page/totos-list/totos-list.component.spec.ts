import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotosListComponent } from './totos-list.component';

describe('TotosListComponent', () => {
  let component: TotosListComponent;
  let fixture: ComponentFixture<TotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
