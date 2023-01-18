import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  mode;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('bookState').subscribe(res => {
      this.mode = res.mode;
    });
  }

}
