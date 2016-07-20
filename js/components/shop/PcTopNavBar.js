'use strict';

import React from 'react';
import NavBarItem from './NavBarItem';

class PcTopNavBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="ui blue six item secondary pointing menu"  id="pcTopNav" style={{ marginTop: '6px', marginBottom: '20px', zIndex: 500, height: "auto", position: "fixed", top: "0px", width: "100%", paddingTop: "6px" }}>
          <NavBarItem icon="home big icon" path="/">首页</NavBarItem>
          <NavBarItem icon="category big icon" path="/cart">分类</NavBarItem>
          <a className="item">
            <i className="shop info circle big icon"></i>
            <p　style={{ fontSize: '12px' }}>关于</p>
          </a>
          <NavBarItem path="/cart">购物车</NavBarItem>
          <a className="item">
          <i className="tasks big icon"> </i>
            <p style={{ fontSize: '12px' }}>订单</p>
          </a>
          <a className="item">
          <i className="user big icon"></i>
            <p　style={{ fontSize: '12px' }}>会员管理</p>
          </a>

        </div>
        <br/><br/>
      </div>
    );
  }
}

export { PcTopNavBar as default };
