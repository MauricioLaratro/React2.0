import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './FirstApp'
import { SecondApp } from './SecondApp';
import './index.css';
import { Props } from './Props';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <SecondApp /> */}
        {/* <Props title='Titulo recibido a través de las Props'/> */}
        {/* <Props/> */}
        <CounterApp value={ 20 }/>
    </React.StrictMode>
)