'use strict';



import 'semantic-ui/dist/semantic.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import shopadminStore from '../../store/shopadminStore.js';
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore} from 'react-router-redux';


import NewProduct from '../../components/shop-admin/NewProduct';
import NewProductStepTwo from '../../components/shop-admin/NewProductStepTwo';
import NewImage from '../../components/shop-admin/NewImage';
import EditImage from '../../components/shop-admin/EditImage';
import Layout from '../../components/shop-admin/Layout';
import ProductAdmin from '../../components/shop-admin/ProductAdmin';
import ProductAdminLoader from '../../components/shop-admin/ProductAdminLoader';
import OrderAdmin from '../../components/shop-admin/OrderAdmin';
import ImageAdmin from '../../components/shop-admin/ImageAdmin';
import Login from '../../components/shop-admin/Login';
import Home from '../../components/shop-admin/Home';
import ImageAdminLoader from "../../components/shop-admin/ImageAdminLoader"

hashHistory.replace('login');

const store = shopadminStore();


const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router  history={hashHistory}>
      <Route path="login" component={Login}>
      </Route>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}/>
        <Route path='products' component={ProductAdmin}>

        </Route>
        <Route path='products/loader' component={ProductAdminLoader}>
        </Route>
        <Route path='orders' component={OrderAdmin}>

        </Route>
        <Route path='products/new' component={NewProduct}>
        </Route>
        <Route path='products/new/step2' component={NewProductStepTwo}>
        </Route>
        <Route path='images' component={ImageAdmin}>
        </Route>
        <Route path='images/loader' component={ImageAdminLoader}>
        </Route>
        <Route path='images/new' component={NewImage}>
        </Route>
        <Route path='images/edit' component={EditImage}>
        </Route>
      </Route>

    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
