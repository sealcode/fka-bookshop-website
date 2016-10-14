import React from 'react';
import ReactDOM from 'react-dom';

import NavPanel from './components/NavPanel';
import {MainPanel} from './components/MainPanel';

const allBooks = [
            {author: "a", title: "1", codes: "10"},
            {author: "b", title: "2", codes: "10"},
            {author: "c", title: "3", codes: "10"},
            {author: "d", title: "4", codes: "10"},
            {author: "e", title: "5", codes: "10"},
            {author: "f", title: "6", codes: "10"},
            {author: "g", title: "7", codes: "10"},
            {author: "h", title: "8", codes: "10"},
            {author: "i", title: "9", codes: "10"},
            {author: "j", title: "10", codes: "10"},
            {author: "k", title: "11", codes: "10"},
            {author: "l", title: "12", codes: "10"},
            {author: "m", title: "13", codes: "10"},
            {author: "n", title: "14", codes: "10"},
            {author: "o", title: "15", codes: "10"},
            {author: "p", title: "16", codes: "10"},
            {author: "r", title: "17", codes: "10"},
            {author: "s", title: "18", codes: "10"},
            {author: "t", title: "19", codes: "10"},
            {author: "u", title: "20", codes: "10"},
];

class App extends React.Component {
    constructor() {
        super();
        this.state = { books: allBooks, phrase: '' };
    }
    componentDidMount() {
        document.addEventListener("filter", function({detail}) {
            const filteredBooks = allBooks.filter( book => book.author.toLowerCase().includes(detail.toLowerCase()) || book.title.toLowerCase().includes(detail.toLowerCase()));
            this.setState({books: filteredBooks, phrase: detail});
        }.bind(this), false);
        document.addEventListener("delete", function({detail}) {
            allBooks.splice(detail, 1);
            this.setState({books: allBooks});
            console.log(allBooks.length);
        }.bind(this), false)
    }
    componentWillUnmount() {
        document.removeEventListener("filter");
        document.removeEventListener("delete");
    }
    render() {
        return (
            <div>
                <NavPanel />
                <MainPanel books={this.state.books} phrase={this.state.phrase}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
