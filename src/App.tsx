import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './State/store'
import 'bootstrap/dist/css/bootstrap.css';
import {Layout} from "./Components/Layout";
import './Components/style.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Layout/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
