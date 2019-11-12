import { Customer } from './customer.model';
import * as CustomerActions from './customer.action'

const initialCustomerState: CustomerState = {
    customers: [
        {
            id: 0,
            name: 'Hüseyin',
            surname: 'Soytürk',
            tel: 5368104686
        },
        {
            id: 1,
            name: 'Onur',
            surname: 'Kumaş',
            tel: 5336895512
        }
    ],
    mode: 'List',
    nextIndex: 2,
    editingCustomer: null
}

export type functionTypes = 'Add' | 'Edit' | 'List'

export interface CustomerState {
    customers: Customer[],
    mode: functionTypes,
    nextIndex: number,
    editingCustomer: Customer
}



export function customerReducer(state: CustomerState = initialCustomerState, action: CustomerActions.Actions): CustomerState {
    switch (action.type) {
        case CustomerActions.ADD_CUSTOMER:
            let addedCustomer: Customer[] = [...state.customers, action.payload]
            return {
                ...state,
                customers: addedCustomer,
                nextIndex: state.nextIndex++,
                mode: 'List'
            }

        case CustomerActions.START_ADD_CUSTOMER:
            return {
                ...state,
                mode: 'Add'
            }

        case CustomerActions.START_EDIT_CUSTOMER:
            return {
                ...state,
                mode: 'Edit',
                editingCustomer: action.payload
            }

        case CustomerActions.EDIT_CUSTOMER:
            const editedCustomer = [
                ...state.customers
            ]

            let customer = editedCustomer.find(obj => obj.id === action.payload.id)

            customer.name = action.payload.name
            customer.surname = action.payload.surname
            customer.tel = action.payload.tel

            return {
                ...state,
                customers: editedCustomer,
                mode: 'List'
            }

        case CustomerActions.DELETE_CUSTOMER:
            let removedCustomers: Customer[] = state.customers.filter(obj => obj.id !== action.payload)
            return {
                ...state,
                customers: removedCustomers
            }

        default:
            return {
                ...state
            };
    }
}