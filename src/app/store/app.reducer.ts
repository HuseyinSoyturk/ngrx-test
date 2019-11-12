import { ActionReducerMap } from '@ngrx/store';

import * as fromBook from '../book/store/book.reducer'
import * as fromCustomer from '../customer/store/customer.reducer'

export interface AppState {
    bookState: fromBook.BookState;
    customerState: fromCustomer.CustomerState;
}

export const appReducer: ActionReducerMap<AppState> = {
    bookState: fromBook.bookReducer,
    customerState: fromCustomer.customerReducer
};