import React from 'react';

import SearchBar from './SearchBar';

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=0, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    newWindow.addEventListener('beforeunload', function() {
        const newBook = localStorage.getItem('newBook');
        if (newBook !== "null") {
            const event = new CustomEvent("newBook", {detail: newBook});
            document.dispatchEvent(event);
        }
    });
}


export default class NavPanel extends React.Component {
    constructor() {
        super();
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
