import React from 'react';
import ReactDOM from 'react-dom';
import {message} from 'antd';

//引入所有的页面组件
import Page from '../components/Page';

import HomePage from '../components/HomePage';
import CompanyNews from '../components/CompanyNews';
import ProductsPage from '../components/ProductsPage.js';
import AboutUs from '../components/AboutUs';
import JoinUs from '../components/JoinUs.js';
import ContactUs from '../components/ContactUs.js';
import MediaCenter from '../components/MediaCenter';
import ProductPage from '../components/ProductPage.js';
import PostPage from '../components/PostPage';

//导入下面包，去加载redux状态,以及其和react-router 之间的同步
import configureStore from '../store/store';
import { Provider, connect } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';


//引入触点事件，增强对移动端更好体验
import injectTapEventPlugin from 'react-tap-event-plugin';


const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Page}>
           <IndexRoute component={HomePage}/>
          <Route path="/company_news" component={CompanyNews}></Route>
          <Route path="/products_page" component={ProductsPage}></Route>
          <Route path="/about_us" component={AboutUs}></Route>
          <Route path="/join_us" component={JoinUs}></Route>
          <Route path="/contact_us" component={ContactUs}></Route>
          <Route path="/media_center" component={MediaCenter}></Route>
          <Route path="/product_page" component={ProductPage}></Route>
          <Route path="/post_page" component={PostPage}></Route>
        </Route>
      </Router>
      </Provider>
    );
  }
}
injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));
