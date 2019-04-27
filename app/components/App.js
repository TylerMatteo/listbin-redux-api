import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import List from '../containers/List';

const App = () => (
        <div>
            <header>
                <h1>
                    ListBin
                </h1>
            </header>
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:listId" component={List} />
                </div>
            </BrowserRouter>
        </div>
    );

export default App;