'use strict';

import React from 'react';
import {Link, Route, Router} from 'react-router';

class LeftNav extends React.Component {
  render() {
    return (
      <div>
      <div className="ui vertical text menu">
        <Link to='/' className="item" >首页</Link>
        <Link to='/orders' className="item">
          订单管理
        </Link>
        <Link to='/products/loader' className="item">
          商品管理
        </Link>
        <Link to='/images/loader' className="item">
          图片管理
        </Link>
        <a className="item">
          主页设置
        </a>
        <a className="ui item">我</a>
        <a className="ui item">
             登出
        </a>
     </div>
      {this.props.children} </div>
    );
  }
}

export { LeftNav as default };
