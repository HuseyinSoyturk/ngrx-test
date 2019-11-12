import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Customer } from '../../store/customer.model';
import { AddCustomer } from '../../store/customer.action';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  subs: Subscription
  nextIndex: number

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subs = this.store.select('customerState').subscribe(res => {
      this.nextIndex = res.nextIndex;
    })
  }

  onClickAdd(name, surname, tel) {
    const customer: Customer = {
      id: this.nextIndex,
      name,
      surname,
      tel
    }
    this.store.dispatch(new AddCustomer(customer))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
