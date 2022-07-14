import React from 'react';
import {Header} from './header/header';
import {Main} from './main/main';

import './app.css';


export const App = () => (
    <div className="app">
        <Header/>
        <Main/>
    </div>
);
