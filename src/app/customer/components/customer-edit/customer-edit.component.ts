import { Component, OnInit } from '@angular/core';
import { Customer } from '../../store/customer.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { EditCustomer } from '../../store/customer.action';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  editingCustomer: Customer;
  subs: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subs = this.store.select('customerState').subscribe(res => {
      this.editingCustomer = res.editingCustomer
    })
  }

  onClickEdit(name, surname, tel) {
    let newCustomer = {
      ...this.editingCustomer,
      name,
      surname,
      tel
    }
    this.store.dispatch(new EditCustomer(newCustomer))
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
