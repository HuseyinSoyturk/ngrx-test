
import { Action } from '@ngrx/store';
import { Book } from './book.model';

export const ADD_BOOK = '[BOOK] ADD';
export const UPDATE_BOOK = '[BOOK] UPDATE';
export const DELETE_BOOK = '[BOOK] DELETE';
export const START_ADD_BOOK = '[BOOK] START ADD';
export const START_EDIT_BOOK = '[BOOK] START EDIT';


export class StartAddBook implements Action {
    readonly type = START_ADD_BOOK;
}

export class AddBook implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: Book) { }
}

export class StartEditBook implements Action {
    readonly type = START_EDIT_BOOK;
    constructor(public payload: Book) { }
}

export class DeleteBook implements Action {
    readonly type = DELETE_BOOK;
    constructor(public payload: number) { }
}

export class UpdateBook implements Action {
    readonly type = UPDATE_BOOK;
    constructor(public payload: Book) { }
}

export type Actions = AddBook | UpdateBook | DeleteBook | StartAddBook | StartEditBook;
