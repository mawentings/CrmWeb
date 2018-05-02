import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './index.css';
import App from './App';
import Login from './routes/User/Login';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('loggedIn') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const routes = (
    <Provider store={store}>
        <Router>
            <div>
                <PrivateRoute path="/app" component={App} />
                <Route path="/login" component={Login} />
                <Route exact path="/" render={() =>
                    localStorage.getItem("loggedIn") ?
                        (<Redirect to='/app' />) :
                        (<Redirect to='/login' />)
                } />
            </div>
        </Router>
    </Provider>

);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
