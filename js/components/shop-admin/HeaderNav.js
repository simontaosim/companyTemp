'use strict';

import React from 'react';
import {Link, Route, Router} from 'react-router';
import RemoteInter from '../../components/shop-admin/RemoteInter';

class HeaderNav extends React.Component {

  handleLoginBtnClick() {
      RemoteInter.logOut()
  }

  render() {

    return (
      <div>
      <div className="ui secondary  menu">
        <Link to='/' className="active item" >首页</Link>

        <Link to='/orders' className="item">
            订单管理
        </Link>
        <Link to='/products/loader' className="item">
          商品管理
        </Link>
        <Link to='/products/new' className="item">
          新商品
        </Link>
        <div className="right menu">
          <a className="ui item">我</a>
           <a className="ui item" onClick={this.handleLoginBtnClick.bind(this)}>
             登出
           </a>
         </div>
     </div>
      {this.props.children} </div>
    );
  }
}

export { HeaderNav as default };
