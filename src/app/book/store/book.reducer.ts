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
    mode: 'List',
    nextIndex: 2
}

export type functionTypes = 'Add' | 'Edit' | 'List'

export interface BookState {
    books: Book[],
    mode: functionTypes,
    nextIndex: number
}



export function bookReducer(state: BookState = initialBookState, action: BookActions.Actions): BookState {

    switch (action.type) {
        case BookActions.ADD_BOOK:
            let addedBooks: Book[] = [...state.books, action.payload]
            return {
                ...state,
                books: addedBooks,
                nextIndex: state.nextIndex++
            }

        case BookActions.START_ADD_BOOK:
            return {
                ...state,
                mode: 'Add'
            }

        case BookActions.STOP_ADD_BOOK:
            return {
                ...state,
                mode: 'List'
            }

        case BookActions.DELETE_BOOK:
            let removedBooks: Book[] = this.state.filter(obj => obj.id !== action.payload)
            return {
                ...state,
                books: removedBooks
            }

        // case BookActions.UPDATE_BOOK:
        //     return {
        //         ...state,

        //     }

        // case BookActions.START_EDIT_BOOK:
        //     return {
        //         ...state,
        //         editingBook: action.payload.book,
        //         editingBookIndex: action.payload.id,
        //         mode: 'Edit'
        //     }

        // case BookActions.STOP_EDIT_BOOK:
        //     return {
        //         ...state,
        //         editingBook: undefined,
        //         editingBookIndex: -1,
        //         mode: 'List'
        //     }

        default:
            return {
                ...state
            };
    }
}