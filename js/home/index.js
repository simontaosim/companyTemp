'use strict';



import 'semantic-ui/dist/semantic.css';
import '../../css/shop/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/shop/Home';
import Layout from '../components/shop/Layout';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import Cart from '../components/shop/Cart';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CartReducer from '../reducers/cart.js';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    CartReducer,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store);

/*
测试
*/
//===========开始测试==========================
// let item1 = { id: 124, price: 58.8, cost: 58.8, quantity: 1, imageUrl: "/images/home-banner2.jpg", title: "车载手机支架豪华版", checked: true};
// let item2 = { id: 125, price: 37, cost: 37, quantity: 1, imageUrl: "/images/home-banner3.jpg", title: "车载手机支架", checked: true};
// console.log("初始状态\n");
// console.log(store.getState());
// // 监听 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
// console.log("发起一系列actions");
// store.dispatch(addCartItem(item1));
// store.dispatch(addCartItem(item2));
// // store.dispatch(selectCartItem(0));
// store.dispatch(unSelectCartItem(1));
// store.dispatch(updateCartCost(store.getState().cartItems));
// console.log("加一");
// store.dispatch(plusQuantity(1));
// store.dispatch(selectCartItem(1));
// store.dispatch(updateCartCost(store.getState().cartItems));
// console.log("改变数字");
// store.dispatch(changeQuantity(0, 5));
// store.dispatch(updateCartCost(store.getState().cartItems));
// store.dispatch(unSelectCartItem(1));
// store.dispatch(updateCartCost(store.getState().cartItems));
// console.log("全不选");
// store.dispatch(setCartStatus("ALL_UNSELECT"));
// console.log(store.getState().cartStatus);
// store.dispatch(updateCartStatus(
//   store.getState().cartItems,
//   store.getState().cartStatus
// ));
//
// store.dispatch(updateCartCost(store.getState().cartItems));
//
// store.dispatch(setCartStatus("SELECT_ALL"));
// store.dispatch(updateCartStatus(
//   store.getState().cartItems,
//   store.getState().cartStatus
// ));
//
// store.dispatch(changeQuantity(1, 2));
// store.dispatch(minusQuantity(0));
//
// store.dispatch(updateCartCost(store.getState().cartItems));
//
// console.log("结束actions");


// 停止监听 state 更新
// unsubscribe();

//===========结束测试==========================




ReactDOM.render(
    <Provider store={store}>
      <Router  history={history}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          <Route path='/cart' component={Cart} />
        </Route>
      </Router>
    </Provider>
  ,
  document.getElementById('app')
);
