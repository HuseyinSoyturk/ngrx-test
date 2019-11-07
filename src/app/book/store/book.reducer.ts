import { Book } from './book.model';
import * as BookActions from './book.action'

const initialBookState: BookState = {
    books: [
        {
            id: 0,
            author: 'Isaac Asimov',
            name: 'The End of Eternity',
            publishYear: new Date('01/01/1953')
        },
        {
            id: 1,
            author: 'Eric J. Hobsbawm',
            name: 'Age of Revolutions',
            publishYear: new Date('01/01/1983')
        }
    ],
    editingBook: undefined
}

interface BookState {
    books: Book[],
    editingBook: Book
}

export function bookReducer(state: BookState = initialBookState, action: BookActions.Actions) {

    switch (action.type) {
        case BookActions.ADD_BOOK:
            let books = [...state.books, action]
            return {
                ...state,
                books
            }


        case BookActions.UPDATE_BOOK:
            let newBook
            return {
                ...state,

            }

        case BookActions.DELETE_BOOK:
            let removedBooks = this.state.filter(obj => obj.id !== action.payload)
            return {
                ...state,
                removedBooks
            }

        case BookActions.START_EDIT_BOOK:
            return {
                ...state,
                editingBook: action.payload
            }

        case BookActions.STOP_EDIT_BOOK:
            return {
                ...state,
                editingBook: undefined
            }

        default:
            return {
                ...state
            };
    }
}