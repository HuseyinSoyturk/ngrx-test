import { Action } from '@ngrx/store';
import { Customer } from './customer.model';

export const ADD_CUSTOMER = '[CUSTOMER] ADD';
export const EDIT_CUSTOMER = '[CUSTOMER] UPDATE';
export const DELETE_CUSTOMER = '[CUSTOMER] DELETE';
export const START_ADD_CUSTOMER = '[CUSTOMER] START ADD';
export const START_EDIT_CUSTOMER = '[CUSTOMER] START EDIT';

export class AddCustomer implements Action {
    readonly type = ADD_CUSTOMER;
    constructor(public payload: Customer) { }
}

export class EditCustomer implements Action {
    readonly type = EDIT_CUSTOMER;
    constructor(public payload: Customer) { }
}

export class DeleteCustomer implements Action {
    readonly type = DELETE_CUSTOMER;
    constructor(public payload: number) { }
}

export class StartAddCustomer implements Action {
    readonly type = START_ADD_CUSTOMER;
}

export class StartEditCustomer implements Action {
    readonly type = START_EDIT_CUSTOMER;
    constructor(public payload: Customer) { }
}

export type Actions = AddCustomer | EditCustomer | DeleteCustomer | StartAddCustomer | StartEditCustomer;
