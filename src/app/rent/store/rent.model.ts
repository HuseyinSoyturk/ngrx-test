import { Book } from '../../book/store/book.model';
import { Customer } from '../../customer/store/customer.model';

export interface Rent {
    id: number,
    book: Book,
    customer: Customer,
    startDate: Date,
    endDate: Date
}