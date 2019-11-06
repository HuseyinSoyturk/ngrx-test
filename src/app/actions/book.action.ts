
import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const ActionTypes = {
    ADD_BOOK: 'ADD_BOOK',
    EDIT_BOOK: 'EDIT_BOOK',
    DELETE_BOOK: 'DELETE_BOOK'
}


export class AddBook implements Action {
    readonly type = ActionTypes.ADD_BOOK
    constructor(public payload: Book) { }
}

export class EditBook implements Action {
    readonly type = ActionTypes.EDIT_BOOK
    constructor(public payload: Book) { }
}
export class DeleteBook implements Action {
    readonly type = ActionTypes.DELETE_BOOK
    constructor(public payload: number) { }
}

export type Actions = AddBook | EditBook | DeleteBook