import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenreComponent } from './book-genre.component';

describe('BookGenreComponent', () => {
  let component: BookGenreComponent;
  let fixture: ComponentFixture<BookGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
