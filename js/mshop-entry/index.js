'use strict';


import "materialize-sass/sass/materialize.scss";
import "./material-icons.css";


import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/configureStore';
import { Provider, connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

import Home from "../components/mshop/Home";
import Cart from "../components/mshop/Cart";
import NewOrder from '../components/mshop/NewOrder'
import ContactManager from '../components/mshop/ContactManager';
import NewContact from '../components/mshop/NewContact';
import Loader from '../components/mshop/Loader';



const store = configureStore();


const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Loader}>
      </Route>
      <Route path="/home" component={Home}>
      </Route>
      <Route path="cart" component={Cart}>
      </Route>
      <Route path="orders/new" component={NewOrder}>
      </Route>
      <Route path="user/contacts" component={ContactManager}>
      </Route>
      <Route path="user/contacts/new" component={NewContact}>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
