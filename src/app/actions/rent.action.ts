import { Action } from '@ngrx/store';
import { Rent } from '../models/rent.model';

export const ActionTypes = {
    ADD_RENT: 'ADD_RENT',
    EDIT_RENT: 'EDIT_RENT',
    DELETE_RENT: 'DELETE_RENT'
}

export class AddRent implements Action {
    readonly type = ActionTypes.ADD_RENT
    constructor(public rent: Rent) { }
}

export class EditRent implements Action {
    readonly type = ActionTypes.EDIT_RENT
    constructor(public rent: Rent) { }
}
export class DeleteRent implements Action {
    readonly type = ActionTypes.DELETE_RENT
    constructor(public id: number) { }
}