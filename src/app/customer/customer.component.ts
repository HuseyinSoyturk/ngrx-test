import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  mode;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('customerState').subscribe(res => {
      this.mode = res.mode;
    })
  }

}
