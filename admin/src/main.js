import React from 'react';
import ReactDOM from 'react-dom';

import NavPanel from './components/NavPanel';
import {MainPanel} from './components/MainPanel';

const allBooks = [
            {author: "Sofokles", title: "Antygona", codes: 10},
            {author: "Ignacy Krasicki", title: "Bajki", codes: 10},
            {author: "Juliusz Słowacki", title: "Balladyna", codes: 10},
            {author: "Wladyslaw Reymont", title: "Chlopi", codes: 10},
            {author: "Adam Mickiewicz", title: "Dziady", codes: 10},
            {author: "Boleslaw Prus", title: "Faraon", codes: 10},
            {author: "Boleslaw Prus", title: "Kamizelka", codes: 10},
            {author: "Adam Mickiewicz", title: "Konrad Wallenrod", codes: 10},
            {author: "Stefan Zeromski", title: "Ludzie bezdomni", codes: 10},
            {author: "Boleslaw Prus", title: "Lalka", codes: 10},
            {author: "Eliza Orzeszkowa", title: "Nad Niemnem", codes: 10},
            {author: "Henryk Sienkiewicz", title: "Ogniem i mieczem", codes: 10},
            {author: "Henryk Sienkiewicz", title: "Potop", codes: 10},
            {author: "Jan Kochanowski", title: "Treny", codes: 10},
            {author: "Stanislaw Wyspiański", title: "Wesele", codes: 10},
            {author: "Aleksander Fredro", title: "Zemsta", codes: 10},
            {author: "Adam Mickiewicz", title: "Pan Tadeusz", codes: 10},
            {author: "Boleslaw Prus", title: "Katarynka", codes: 10},
            {author: "Zygmunt Krasiński", title: "Nie-Boska komedia", codes: 10},
            {author: "Cyprian Kamil Norwid", title: "Wiersze", codes: 10},
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
        }.bind(this), false);
        document.addEventListener("modifyBook", function({detail}) {
            const modifiedBook = JSON.parse(detail);
            modifiedBook.id--;
            allBooks[modifiedBook.id].author = modifiedBook.author;
            allBooks[modifiedBook.id].title = modifiedBook.title;
            this.setState({books: allBooks});
        }.bind(this), false);
        document.addEventListener("newBook", function({detail}) {
            const newBook = JSON.parse(detail);
            allBooks.push(newBook);
            this.setState({books: allBooks});
        }.bind(this), false);
        document.addEventListener("generatedCodes", function({detail}) {
            const generatedCodes = JSON.parse(detail);
            console.log(generatedCodes);
            generatedCodes.id--;
            allBooks[generatedCodes.id].codes = parseInt(allBooks[generatedCodes.id].codes) + parseInt(generatedCodes.codes);
            this.setState({books: allBooks});
        }.bind(this), false);
    }
    componentWillUnmount() {
        document.removeEventListener("filter");
        document.removeEventListener("delete");
        document.removeEventListener("modifyBook");
        document.removeEventListener("newBook");
        document.removeEventListener("generatedCodes");
    }
    render() {
        return (
            <div>
                <NavPanel />
                <MainPanel books={this.state.books} phrase={this.state.phrase}/>
                <img id="sealcode-logo" src="../img/LogoSealcode.svg"></img>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
