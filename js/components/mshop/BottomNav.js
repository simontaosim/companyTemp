'use strict';

import React from 'react';
import { connect } from 'react-redux';

import BottomNavItem from "./BottomNavItem";
import {setCartMassage} from "../../actions/app.js";
// import "materialize-css/js/tabs.js";

class BottomNav extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  render() {
    const {cartMassage} = this.props;
    return (
      <div className="navbar-fixed"  style={{position: "fixed", bottom: "1px", width: "100%"}}>
      <nav>
          <div className="nav-wrapper red grey lighten-5">
            <ul id="nav-bottom-mobile" className="center">
              <BottomNavItem  textItem="首页" icon="home" path="/" />
              <BottomNavItem  textItem="购物车" icon="shopping_cart" path="cart" cartMassage={this.props.cartMassage} />
              <BottomNavItem  textItem="订单" icon="assignment" path="cart" />
              <BottomNavItem  textItem="我" icon="person" path="cart" />
            </ul>
          </div>
      </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartMassage: state.AppReducer.cartMassage
   };
}
export default connect(mapStateToProps)(BottomNav);
