import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/cart';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import CartReducer from '../reducers/cart';
import HomeReducer from '../reducers/home';
import AppReducer from '../reducers/app';
import orderStore from '../reducers/orderStore';

const rmiddleware = routerMiddleware(hashHistory)
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(rmiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      HomeReducer,
      CartReducer,
      AppReducer,
      orderStore,
      routing: routerReducer
    }),
    initialState,
    enhancer);
}
