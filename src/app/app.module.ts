import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component'
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookAddComponent } from './book/components/book-add/book-add.component';
import { BookEditComponent } from './book/components/book-edit/book-edit.component';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
