import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import MyContext from './components/bookstore-service-context/';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
<Provider store={store}>
    <ErrorBoundry>
        <MyContext.Provider value={bookstoreService}>
            <Router basename="/BookSore/" >
                <App/>
            </Router>
        </MyContext.Provider>
    </ErrorBoundry>
    
</Provider> 
,document.getElementById('root')
);