import { Rent } from './rent.model';
import { AppState } from 'src/app/store/app.reducer';
import * as RentActions from './rent.action'

export type FunctionTypes = 'Add' | 'Edit' | 'List'
export interface RentState {
    rents: Rent[],
    editingRent: Rent,
    nextIndex: number,
    mode: FunctionTypes
}

export function rentReducer(state: RentState, action: RentActions.Actions): RentState {
    switch (action.type) {
        case RentActions.ADD_RENT:
            const addedRents = [
                ...state.rents,
                action.payload
            ]

            return {
                ...state,
                rents: addedRents,
                mode: 'List'
            }

        case RentActions.EDIT_RENT:
            const editedRents = [
                ...state.rents
            ]

            let editingRent = editedRents.find(obj => obj.id === action.payload.id);

            editingRent.book = action.payload.book
            editingRent.customer = action.payload.customer
            editingRent.startDate = action.payload.startDate
            editingRent.endDate = action.payload.endDate

            return {
                ...state,
                rents: editedRents,
                editingRent: null,
                mode: 'List'
            }

        case RentActions.DELETE_RENT:
            const deletedRents = state.rents.filter(obj => obj.id !== action.payload)

            return {
                ...state,
                rents: deletedRents
            }

        case RentActions.START_ADD_RENT:
            return {
                ...state,
                mode: 'Add'
            }

        case RentActions.START_EDIT_RENT:
            return {
                ...state,
                editingRent: action.payload,
                mode: 'Edit'
            }

        default:
            break;
    }
}