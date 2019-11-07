import { ActionReducerMap } from '@ngrx/store';

import * as fromBook from '../book/store/book.reducer'

export interface AppState {
    bookState: fromBook.BookState;
}

export const appReducer: ActionReducerMap<AppState> = {
    bookState: fromBook.bookReducer,
};