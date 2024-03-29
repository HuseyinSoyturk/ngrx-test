import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import * as fromApp from './store/app.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookAddComponent } from './book/components/book-add/book-add.component';
import { BookEditComponent } from './book/components/book-edit/book-edit.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/components/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/components/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/components/customer-edit/customer-edit.component';

import { RentComponent } from './rent/rent.component';
import { RentListComponent } from './rent/components/rent-list/rent-list.component';
import { RentAddComponent } from './rent/components/rent-add/rent-add.component';
import { RentEditComponent } from './rent/components/rent-edit/rent-edit.component';

const appRoutes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'customer', component: CustomerComponent  },
  { path: 'rent', component: RentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    HeaderComponent,
    RootComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerComponent,
    RentComponent,
    RentEditComponent,
    RentAddComponent,
    RentListComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
