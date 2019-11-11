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
    nextIndex: 2,
    editingBook: null
}

export type functionTypes = 'Add' | 'Edit' | 'List'

export interface BookState {
    books: Book[],
    mode: functionTypes,
    nextIndex: number,
    editingBook: Book
}



export function bookReducer(state: BookState = initialBookState, action: BookActions.Actions): BookState {
    switch (action.type) {
        case BookActions.ADD_BOOK:
            let addedBooks: Book[] = [...state.books, action.payload]
            return {
                ...state,
                books: addedBooks,
                nextIndex: state.nextIndex++,
                mode: 'List'
            }

        case BookActions.START_ADD_BOOK:
            return {
                ...state,
                mode: 'Add'
            }

        case BookActions.START_EDIT_BOOK:
            return {
                ...state,
                mode: 'Edit',
                editingBook: action.payload
            }

        case BookActions.UPDATE_BOOK:
            const editedBooks = [
                ...state.books
            ]

            let book = editedBooks.find(obj => obj.id === action.payload.id)

            book.name = action.payload.name
            book.author = action.payload.author
            book.publishYear = action.payload.publishYear

            return {
                ...state,
                books: editedBooks,
                mode: 'List'
            }

        case BookActions.DELETE_BOOK:
            let removedBooks: Book[] = state.books.filter(obj => obj.id !== action.payload)
            return {
                ...state,
                books: removedBooks
            }

        default:
            return {
                ...state
            };
    }
}