import React from 'react';

import Book from './Book';
import BooksService from '../services/BooksService';


export default class Books extends React.Component {
    constructor() {
        super();
        this.showBooks = this.showBooks.bind(this);
    }
    showBooks(books) {
        return books.map( (book, index) => <Book key={index} id={book.id} author={book.author} title={book.title} codes={book.codes} />)
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>autor</th>
                        <th>tytuł</th>
                        <th>liczba kodów</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.showBooks(BooksService().getBooks())}
                </tbody>
            </table>
        )
    }
}
