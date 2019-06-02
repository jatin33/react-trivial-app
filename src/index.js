import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './Home';
import UserDetails from './UserDetails';
import * as serviceWorker from './serviceWorker';
import EditDetails from './EditDetails';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/showuser" component={UserDetails} />
            <Route path="/edituser" component={EditDetails} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
