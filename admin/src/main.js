import React from 'react';
import ReactDOM from 'react-dom';

import NavPanel from './components/NavPanel';
import MainPanel from './components/MainPanel';

const App = () => {
    return (
        <div>
            <NavPanel />
            <MainPanel />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
