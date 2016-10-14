import React from 'react';

import BooksService from '../services/BooksService';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { value: '' }
        this.filterBooks = this.filterBooks.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    filterBooks(e) {
        e.preventDefault();
        const event = new CustomEvent("filter", {detail: this.state.value});
        document.dispatchEvent(event);
    }
    handleChange(event) {
        this.setState({value: event.target.value})
        // if (event.target.value === '') {
        //     const event = new CustomEvent("filter", {detail: ''});
        //     document.dispatchEvent(event);
        // }
    }
    render() {
        return (
            <div className="main-panel-search">
                <form onSubmit={this.filterBooks}>
                    <input type="search" value={this.state.value} onChange={this.handleChange} placeholder="Jan Kowalski; Nad Niemnem"/>
                    <button type="submit">Szukaj</button>
                </form>
            </div>
        );
    }
}
