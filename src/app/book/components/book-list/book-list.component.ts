import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Book } from '../../store/book.model';
import { StartAddBook, DeleteBook, UpdateBook, StartEditBook } from '../../store/book.action';

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
      this.books = res.books;
    });
  }

  onClickAdd(): void {
    this.store.dispatch(new StartAddBook());
  }

  onClickEdit(book: Book): void {
    this.store.dispatch(new StartEditBook(book));
  }

  onClickDelete(book: Book): void {
    this.store.dispatch(new DeleteBook(book.id));
  }

}
