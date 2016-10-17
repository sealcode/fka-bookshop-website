import React from 'react';

import PopupCenter from '../utils/PopupCenter.js';

function generateCodes(props) {
    localStorage.setItem('book', JSON.stringify(props));

    PopupCenter('generate-codes.html', '', '600', '350', function() {
        const generatedCodes = localStorage.getItem('generatedCodes');
        if (generatedCodes !== "-1") {
            const event = new CustomEvent("generatedCodes", {detail: generatedCodes});
            document.dispatchEvent(event);
        }
    });
}

function editBook(props) {
    localStorage.setItem('book', JSON.stringify(props));

    PopupCenter('edit-book.html','','600','350', function() {
        const modifiedBook = localStorage.getItem('modifiedBook');
        const event = new CustomEvent("modifyBook", {detail: modifiedBook});

        document.dispatchEvent(event);
    });
}

function deleteBook(id) {
    swal({
      title: "Uwaga!",
      text: "Czy na pewno chcesz usunąć ten wpis?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Usuń",
      closeOnConfirm: false
    },
    function(){
        const event = new CustomEvent("delete", {detail: --id});
        document.dispatchEvent(event);
        swal("Usunięto!", "Ksiązka zostala usunieta z bazy danych", "success");
    });
}

const Book = (props) => (
    <tr>
        <td>
            <input className="checkbox" type="checkbox" />
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
                <span className="controls" onClick={() => { generateCodes(props) }}>Generuj kody</span>
            </span>
            <span>
                <img src="http://icons.iconarchive.com/icons/led24.de/led/16/pencil-icon.png" />
                <span className="controls" onClick={() => { editBook(props) }}>Edytuj</span>
            </span>
            <span>
                <img src="https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif" />
                <span className="controls" onClick={() => { deleteBook(props.id) }}>Usuń</span>
            </span>
        </td>
    </tr>
);

export default Book;
