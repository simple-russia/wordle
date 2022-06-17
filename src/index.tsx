import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from 'src/utils/redux';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const AppComponent = (
    <Provider store={store}>
        <App />
    </Provider>
)

root.render(AppComponent);
