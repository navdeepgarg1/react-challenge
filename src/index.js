import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TableContainer from './containers/tableContainer/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <TableContainer />
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();
serviceWorker.unregister();
