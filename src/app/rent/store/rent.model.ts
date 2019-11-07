import { Book } from './book.model';
import { Customer } from './customer.model';

export interface Rent {
    id: number,
    book: Book,
    customer: Customer,
    startDate: Date,
    endDate: Date
}