import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodolistComponent } from './app-todolist.component';

describe('AppTodolistComponent', () => {
  let component: AppTodolistComponent;
  let fixture: ComponentFixture<AppTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
