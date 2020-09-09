import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './State/store'
import {Search} from './Components/Search/Search'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Search/>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
