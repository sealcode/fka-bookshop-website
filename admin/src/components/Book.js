import React from 'react';

// import popupCenter from '../utils/popupCenter.js';

const popupCenter = (url, title, w, h) => {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=0, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

const Book = (props) => (
    <tr>
        <td>
            <input type="checkbox" />
        </td>
        <td>
            {props.id}
        </td>
        <td>
            {props.author}
        </td>
        <td>
            {props.title}
        </td>
        <td>
            {props.codes}
        </td>
        <td>
            <span>
                <img src="http://megaicons.net/static/img/icons_sizes/8/1331/16/stock-index-up-icon.png" />
                <span>Generuj kody</span>
            </span>
            <span>
                <img src="http://icons.iconarchive.com/icons/led24.de/led/16/pencil-icon.png" />
                <span className="edit" onClick={() => {popupCenter('edit-book.html','','600','350')}}>Edytuj</span>
            </span>
            <span>
                <img src="https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif" />
                <span>Usuń</span>
            </span>
        </td>
    </tr>
);

export default Book;
