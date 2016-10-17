import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { value: '' }
        this.filterBooks = this.filterBooks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    filterBooks(e) {
        e.preventDefault();
        console.log(e);
        const event = new CustomEvent("filter", {detail: this.state.value});
        document.dispatchEvent(event);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this.setState({value: ''});
            e.target.value = '';
            const event = new CustomEvent("filter", {detail: ''});
            document.dispatchEvent(event);
        }
    }
    render() {
        return (
            <div className="main-panel-search">
                <form onSubmit={this.filterBooks}>
                    <input type="search" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder="Jan Kowalski; Nad Niemnem"/>
                    <button type="submit">Szukaj</button>
                </form>
            </div>
        );
    }
}
