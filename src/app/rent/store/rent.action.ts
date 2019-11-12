import { Action } from '@ngrx/store';
import { Rent } from './rent.model';

export const ADD_RENT = '[RENT] ADD';
export const EDIT_RENT = '[RENT] EDIT';
export const DELETE_RENT = '[RENT] DELETE';
export const START_ADD_RENT = '[RENT] START ADD';
export const START_EDIT_RENT = '[RENT] START EDIT';

export class AddRent implements Action {
    readonly type = ADD_RENT
    constructor(public payload: Rent) { }
}

export class EditRent implements Action {
    readonly type = EDIT_RENT
    constructor(public payload: Rent) { }
}
export class DeleteRent implements Action {
    readonly type = DELETE_RENT
    constructor(public payload: number) { }
}

export class StartAddRent implements Action {
    readonly type = START_ADD_RENT;
}

export class StartEditRent implements Action {
    readonly type = START_EDIT_RENT;
    constructor(public payload: Rent) { }
}

export type Actions = AddRent | EditRent | DeleteRent | StartAddRent | StartEditRent