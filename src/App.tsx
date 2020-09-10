import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/store'
import {Layout} from "./components/Layout";

import 'bootstrap/dist/css/bootstrap.css';
import './components/index.css'

const App = () => (
    <Provider store={store}>
        <Layout/>
    </Provider>
);

export default App;
