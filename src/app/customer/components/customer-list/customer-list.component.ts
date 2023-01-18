import { Component, OnInit } from '@angular/core';
import { Customer } from '../../store/customer.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { StartAddCustomer, StartEditCustomer, DeleteCustomer } from '../../store/customer.action';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('customerState').subscribe((res): void => {
      this.customers = res.customers;
    });
  }

  onClickAdd(): void {
    this.store.dispatch(new StartAddCustomer());
  }

  onClickEdit(customer: Customer): void {
    this.store.dispatch(new StartEditCustomer(customer));
  }

  onClickDelete(customer: Customer): void {
    this.store.dispatch(new DeleteCustomer(customer.id));
  }
}
