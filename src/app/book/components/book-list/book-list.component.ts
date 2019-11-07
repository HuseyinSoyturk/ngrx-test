import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Book } from '../../store/book.model';
import { StartAddBook } from '../../store/book.action';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('bookState').subscribe((res): void => {
      this.books = res.books
    })
  }

  onClickAdd() {
    this.store.dispatch(new StartAddBook())
  }

}
