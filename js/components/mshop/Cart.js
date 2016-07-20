'use strict';

import React from 'react';
import { hashHistory, Link } from 'react-router';
import { push, goBack } from 'react-router-redux';
import { connect } from 'react-redux';

import TopNav from "./TopNav";
import CartList from './CartList';
import BottomNav from './BottomNav';
import BackNavIcon from './BackNavIcon';

import {
  changeCartItemSelectedAndUpdateCartStatusAndUpdateCartCost,
  plusQuantityAndUpdateCartCost,
  minusQuantityAndUpdateCartCost,
  changeQuantityAndUpdateCartCost,
  removeCartItemAndSendCartMassageAndUpdateCartCost,
  CheckCartStatus,
  changeAllCartItemSelectedAndSetCartStatusAndUpdateCartCost,
  checkOutAndGenerateNewOrderByCart,

} from "../../actions/cart.js";

class Cart extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    $("#nav-bottom-mobile li:eq(1)").find("i").css("color", "#d32f2f");
    $("#nav-bottom-mobile li:eq(1)").find("p").css("color", "#d32f2f");
    $("#nav-bottom-mobile li:eq(1)").addClass("active");
    $('.materialboxed').materialbox();
    $(window).scrollTop(0);//当出现的时候屏幕滑到顶部
  }
  isALlSelected(status=CheckCartStatus.SELECT_ALL){
    switch (status) {
      case CheckCartStatus.SELECT_ALL:
        return true;
        break;
      case CheckCartStatus.ALL_UNSELECT:
        return false;
        break;
      default:
        return false;
    }
  }

  render() {
    const { dispatch, cartItems, cartCost, cartStatus} = this.props;
    var isEmpty = false;
    let empty_content = function(length) {
      if (length == 0) {
        isEmpty = true;
            return (
              <div style={{padding: "10px", textAlign: "center"}}>
                购物车空空如也～
                <p>
                  <Link to="/" className="waves-effect waves-yellow btn red small">
                  去逛逛～
                  </Link>
                </p>

              </div>

            );
          }

          return "";
    };

    return (
      <div id="cartContent">
        <TopNav leftClick={()=>dispatch(goBack())}
        leftItem={<BackNavIcon />}
          rightItem="">购物车</TopNav>
        <CartList cartItems={this.props.cartItems}
        handleCheckChange={index=>dispatch(changeCartItemSelectedAndUpdateCartStatusAndUpdateCartCost(index))}
        plusQuantity={index=>dispatch(plusQuantityAndUpdateCartCost(index))}
        minusQuantity={index=>dispatch(minusQuantityAndUpdateCartCost(index))}
        removeCartItem={index=>dispatch(removeCartItemAndSendCartMassageAndUpdateCartCost(index))}
        handleQuantityChange={(q)=> dispatch(changeQuantityAndUpdateCartCost(q.index, Number(q.quantity)))}
        />
        {empty_content(this.props.cartItems.length)}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <form>
        <div className="row grey lighten-5"  style={{position: "fixed", zIndex: "899",padding: "2px", bottom: "41px", width: "100%", display: isEmpty ? "none" : "block"}}>
          <div className="col s4">
            <p style={{position: "relative", left: "5px", top: "3px" }}>
              <input type="checkbox" onChange={()=>{}} className="filled-in" id="filled-in-box"
              checked={this.isALlSelected(this.props.cartStatus)}
              onClick={
                () => dispatch(changeAllCartItemSelectedAndSetCartStatusAndUpdateCartCost(
                  this.isALlSelected(this.props.cartStatus)
                ))
              }
              />
              <label htmlFor="filled-in-box">全选</label>
            </p>
          </div>

          <div className="col s5">
              <p style={{textAlign: "center", position: "relative", left: "5px", top: "8px" }}>
                合计：
                <span className="">{this.props.cartCost}</span>元
              </p>
          </div>
          <div  className="col s3">
            <p style={{textAlign: "center"}}>
              <a onClick={()=>dispatch(checkOutAndGenerateNewOrderByCart(this.props.cartItems, this.props.cartCost))}  style={{paddingLeft: "10px", paddingRight: "10px"}}  className="waves-effect waves-yellow btn red small" >
                结算
              </a>
            </p>
          </div>
        </div>
        </form>
        <BottomNav />

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.CartReducer.cartItems,
    cartCost: state.CartReducer.cartCost,
    cartStatus: state.CartReducer.cartStatus
   };
}


export default connect(mapStateToProps)(Cart);
