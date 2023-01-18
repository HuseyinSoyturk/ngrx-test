import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../store/book.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { AddBook } from '../../store/book.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit, OnDestroy {
  subs: Subscription;
  nextIndex: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subs = this.store.select('bookState').subscribe(res => {
      this.nextIndex = res.nextIndex;
    });
  }

  onClickAdd(name, author, publishYear) {
    const book: Book = {
      id: this.nextIndex,
      name,
      author,
      publishYear: new Date(publishYear)
    };
    this.store.dispatch(new AddBook(book));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
