import React from 'react';

import PopupCenter from '../utils/PopupCenter';

import BooksService from '../services/BooksService';
import SearchBar from './SearchBar';

export default class NavPanel extends React.Component {
    constructor() {
        super();
        BooksService().reset();
    }
    render() {
        return (
            <div className="nav-panel">
                <div>
                    <h1>Panel Admina</h1>
                    <ul>
                        <li onClick={() => { PopupCenter('new-book.html','','600','350') }}>Dodaj książkę</li>
                        <li>Generuj wykaz książek i kodów</li>
                    </ul>
                </div>
                <SearchBar />
            </div>
        )
    }
}
