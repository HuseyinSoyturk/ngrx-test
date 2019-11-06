import { Book } from '../models/book.model';
import * as BookActions from '../actions/book.action'



export function bookReducer(state: Book[] = [], action: BookActions.Actions) {

    switch (action.type) {
        case BookActions.ActionTypes.ADD_BOOK:
            return [...state, action.payload]
            break;
        case BookActions.ActionTypes.EDIT_BOOK:
            const book = this.state.find(obj => obj.id === action.payload)
            return [...state, action.payload]
            break;
        case BookActions.ActionTypes.DELETE_BOOK:
            let newState = this.state.filter(obj => obj.id !== action.payload)
            return [...newState]
            break;

        default:
            break;
    }
}