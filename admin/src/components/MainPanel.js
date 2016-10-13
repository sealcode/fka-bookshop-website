import React from 'react';

import Books from './Books';

export default class MainPanel extends React.Component {
    render() {
        return (
            <div className="main-panel">
                <div className="main-panel-table">
                    <h2>Wszystkie książki</h2>
                    <div className="main-panel-controls">
                        <button>Generuj kody dla zaznaczonych</button>
                        <button>Edytuj zaznaczone</button>
                        <button>Usuń zaznaczone</button>
                    </div>
                    <Books />
                </div>
            </div>
        )
    }
}
