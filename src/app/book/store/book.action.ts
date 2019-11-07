
import { Action } from '@ngrx/store';
import { Book } from './book.model';

export const ADD_BOOK = '[BOOK] ADD';
export const UPDATE_BOOK = '[BOOK] UPDATE';
export const DELETE_BOOK = '[BOOK] ADD';
export const START_EDIT_BOOK = '[BOOK] START ADD';
export const STOP_EDIT_BOOK = '[BOOK] STOP ADD';


export class AddBook implements Action {
    readonly type = ADD_BOOK
    constructor(public payload: Book) { }
}

export class UpdateBook implements Action {
    readonly type = UPDATE_BOOK
    constructor(public payload: Book) { }
}

export class DeleteBook implements Action {
    readonly type = DELETE_BOOK
    constructor(public payload: number) { }
}

export class StartEditBook implements Action {
    readonly type = START_EDIT_BOOK
    constructor(public payload: {
        book: Book,
        id: number
    }) { }
}

export class StopEditBook implements Action {
    readonly type = STOP_EDIT_BOOK
}


export type Actions = AddBook | UpdateBook | StartEditBook | StopEditBook | DeleteBook