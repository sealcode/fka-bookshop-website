import React from 'react';

import Books from './Books';

function resetSearchQuery() {
    const event = new CustomEvent("filter", {detail: ''});
    document.dispatchEvent(event);
}

export const MainPanel = ({books, phrase}) => {
    let booksDisplayed;
    if (phrase === '') {
        booksDisplayed = <h2>Wszystkie książki</h2>;
    } else {
        booksDisplayed = <div><h2 style={{display: "inline-block", marginRight: "0.5rem"}}>Szukana fraza: {phrase}</h2><a href="#" onClick={resetSearchQuery}>Reset</a></div>;
    }
    return (
        <div className="main-panel">
            <div className="main-panel-table">
                {booksDisplayed}
                <div className="main-panel-controls">
                    <button>Generuj kody dla zaznaczonych</button>
                    <button>Edytuj zaznaczone</button>
                    <button>Usuń zaznaczone</button>
                </div>
                <Books books={books}/>
            </div>
        </div>
    )
}
