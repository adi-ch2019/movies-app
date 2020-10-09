import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMoviesComponent } from './delete-movies.component';

describe('DeleteMoviesComponent', () => {
  let component: DeleteMoviesComponent;
  let fixture: ComponentFixture<DeleteMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
