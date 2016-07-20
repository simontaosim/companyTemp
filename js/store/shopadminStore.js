import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import ImageReducer from '../reducers/shopadmin/image.js';
import ProductReducer from '../reducers/shopadmin/product.js';


const rmiddleware = routerMiddleware(hashHistory)
export default function shopadminStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(rmiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      ImageReducer,
      ProductReducer,
      routing: routerReducer
    }),
    initialState,
    enhancer);
}
