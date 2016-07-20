import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import page from '../reducers/page';

const rmiddleware = routerMiddleware(hashHistory)
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),//增加thunk中间件以便于完成多个actions的异步执行
    applyMiddleware(rmiddleware)
    // ,
    //redux开发工具以便于调试
    // window.devToolsExtension ? window.devToolsExtension() : f => f

  );
  return createStore(
    combineReducers({
      page,
      routing: routerReducer
    }),
    initialState,
    enhancer);
}
