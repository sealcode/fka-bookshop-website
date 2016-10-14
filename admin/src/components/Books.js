import React from 'react';

import Book from './Book';
import BooksService from '../services/BooksService';


export default class Books extends React.Component {
    constructor(props) {
        super();
        this.props = props
        this.displayBooks = this.displayBooks.bind(this);
    }
    displayBooks() {
        return this.props.books.map( (book, index) => <Book key={index} id={++index} author={book.author} title={book.title} codes={book.codes} />)
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
                    {this.displayBooks()}
                </tbody>
            </table>
        )
    }
}
