"use strict"

import React from "react";
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import CartReducer from '../../reducers/cart.js';
import { routerMiddleware, push } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory);
const store = createStore(
  CartReducer,
  applyMiddleware(middleware)
);


class NavBarItem extends React.Component {

  handleMenuOnTap() {
    store.dispatch(push(this.props.path));
  }

  render() {
    return (
      <a  className="item"
      onTouchTap={this.handleMenuOnTap.bind(this)}
      >
        <i className={this.props.icon}></i>
        <p　style={{ fontSize: '12px' }}>{this.props.children}</p>
      </a>
    );
  }
}

export {NavBarItem as default };
