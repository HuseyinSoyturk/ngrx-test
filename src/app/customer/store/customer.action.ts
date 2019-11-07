import { Action } from '@ngrx/store';
import { Customer } from './customer.model';

export const ActionTypes = {
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    EDIT_CUSTOMER: 'EDIT_CUSTOMER',
    DELETE_CUSTOMER: 'DELETE_CUSTOMER'
}

export class AddCustomer implements Action {
    readonly type = ActionTypes.ADD_CUSTOMER
    constructor(public customer: Customer) { }
}

export class EditCustomer implements Action {
    readonly type = ActionTypes.EDIT_CUSTOMER
    constructor(public customer: Customer) { }
}
export class DeleteCustomer implements Action {
    readonly type = ActionTypes.DELETE_CUSTOMER
    constructor(public id: number) { }
}