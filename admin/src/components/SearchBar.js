import React from 'react';

import BooksService from '../services/BooksService';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { value: '' }
        this.filterBooks = this.filterBooks.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    filterBooks() {
        BooksService().filterBooks(this.state.value);
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <div className="main-panel-search">
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Jan Kowalski; Nad Niemnem"/>
                <button onClick={this.filterBooks}>Szukaj</button>
            </div>
        )
    }
}
