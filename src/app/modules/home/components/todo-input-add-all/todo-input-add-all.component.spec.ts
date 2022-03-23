import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddAllComponent } from './todo-input-add-all.component';

describe('TodoInputAddAllComponent', () => {
  let component: TodoInputAddAllComponent;
  let fixture: ComponentFixture<TodoInputAddAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
