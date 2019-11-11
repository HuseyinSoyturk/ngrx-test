import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../store/book.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { UpdateBook } from '../../store/book.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  editingBook: Book;
  subs: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subs = this.store.select('bookState').subscribe(res => {
      this.editingBook = res.editingBook
    })
  }

  onClickEdit(name, author, publishYear) {
    let newBook = {
      ...this.editingBook,
      name,
      author,
      publishYear : new Date(publishYear)
    }
    this.store.dispatch(new UpdateBook(newBook))
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
