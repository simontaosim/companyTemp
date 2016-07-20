'use strict';

import React from 'react';


import NavBarItem from './NavBarItem';





class MobileBottomNavBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="ui blue four item secondary pointing menu" id="mobileBottomNav" style={{ marginBottom: '0px', zIndex: 500, height: "auto", position: "fixed", bottom: "0px", paddingTop: "6px", backgroundColor: "#FFFFFB" }}>
          <NavBarItem icon="home big icon" path="/">首页</NavBarItem>
          <NavBarItem icon="shop big icon" path="/cart">购物车</NavBarItem>
          <NavBarItem icon="tasks big icon">订单</NavBarItem>
          <NavBarItem icon="user big icon">我</NavBarItem>
      </div>
    );
  }
}

export { MobileBottomNavBar as default };
