'use strict';

import React from 'react';
import MobileTopNavBar from './MobileTopNavBar';
import PcTopNavBar from './PcTopNavBar';
import CartList from './CartList';
import { connect } from 'react-redux';
import CartReducer from '../../reducers/cart.js'
import { createStore } from 'redux'
import {
  addCartItem,
  selectCartItem,
  unSelectCartItem,
  updateCartCost,
  plusQuantity,
  minusQuantity,
  changeQuantity,
  updateCartStatus,
  setCartStatus,
  removeCartItem,
  cartChectOut,
  changeCartItemSelected
} from "../../actions/cart.js";

let store = createStore(CartReducer);



class Cart extends React.Component {

  constructor(props) {
    super(props);
    let cost = 0.00;

    let data = [
      { id: 123, price: 113, imageUrl: "/images/home-banner4.jpg", title: "真匠汽车GPS定位追踪器强磁免安装超长待机防盗器微型卫星跟踪器", checked: true},
      { id: 124, price: 58.8, imageUrl: "/images/home-banner2.jpg", title: "车载手机支架豪华版", checked: true},
      { id: 125, price: 37, imageUrl: "/images/home-banner3.jpg", title: "车载手机支架", checked: true}
    ];
    for (var i = 0; i < data.length; i++) {
      cost += data[i].price;
    }
    //1表示全选
    //2表示不全选
    //0表示全不选
    this.state = {data: data, cost: cost, isAllSelected: 1};
    // setInterval(() => this.getComments(), 5000);


  }

  changeStateCost(cost) {
    let data = this.state.data;
    let isAllSelected = this.state.isAllSelected;
    this.setState({data: data, cost: cost, isAllSelected: isAllSelected});
  }

  changeStateIsAllSelected(check) {
    let data = this.state.data;
    let cost = this.state.cost;
    this.setState({data: data, cost: cost, isAllSelected: check});
  }

  componentDidMount() {

    // console.log(this.props.cartItems);
    // const { dispatch, cartItems} = this.props;
    // dispatch(updateCartCost(this.props.cartItems));

    $("#mobileBottomNav .item").each(function(){
      $(this).removeClass("active")
    })
    $("#pcTopNav .item").each(function(){
      $(this).removeClass("active")
    })
      $("#mobileBottomNav .item:eq(1)").addClass("active");
      $("#pcTopNav .item:eq(1)").addClass("active");

    this.refs.checkbox.checked = this.state.isAllSelected;

  }

  changeCheckBoxByStateNumber(check) {
    switch (check) {
      case 0:
        this.refs.checkbox.checked = false;
        this.showTotalCost();
        break;
      case 1:
        this.refs.checkbox.checked = true;
        this.showTotalCost();
        break;
      default:
        this.refs.checkbox.checked = false;
        this.showTotalCost();
    }
  }

  handleListChange(pay){
      let data = this.state.data;
      let isAllSelected = this.state.isAllSelected
      this.setState({data: data, cost: pay.cost, isAllSelected: pay.isAllSelected});
      this.changeCheckBoxByStateNumber(pay.isAllSelected);
      this.changeStateCost(pay.cost);
  }

  allCartItemsCheckedChange(allChecked) {
    $(".item.ui.grid.cart-item").each(function(){
      let checked = $(this).find('input[type="checkbox"]').prop("checked");
      $(this).find('input[type="checkbox"]').prop("checked", allChecked);
    });
    let cost  = 0;
    $(".cart.cost-item").each(function(){
      var cost_item = Number($(this).html());
      cost += cost_item;

    });
    this.changeStateCost(cost);
    this.state.cost = cost;
    $("#cart-total-price").html(this.showTotalCost());
  }


  handleCheckInputChange(event) {
    event.preventDefault();

    let checked =this.refs.checkbox.checked;

    this.allCartItemsCheckedChange(!checked);
    checked = !checked;
    console.log(checked);
    if (checked == true) {
      this.state.isAllSelected = 1;
      this.changeStateIsAllSelected(1);
    }
    if (checked == false) {
      this.state.isAllSelected = 0;
      this.changeStateIsAllSelected(0);
    }
    console.log(this.state.isAllSelected);
    this.changeCheckBoxByStateNumber(this.state.isAllSelected);

  }

  showTotalCost() {
    if (this.state.isAllSelected == 0) {
      return '0';
    }else{
      return this.state.cost;
    }
  }
  addItem() {
    const { dispatch, cartItems, getState } = this.props;
      getState();
  }

  updateCartCost() {
    const { dispatch, cartItems, cartCost} = this.props;
    dispatch(updateCartCost(this.props.cartItems));
  }

  onItemCheckChange(index) {
    const { dispatch, cartItems, cartCost} = this.props;
    dispatch(changeCartItemSelected(index));
    this.updateCartCost()

  }





  render() {

    const { dispatch, cartItems, cartCost} = this.props;


    return (
      <div className="container-fluid" style={{width: "95%"}}>
      <PcTopNavBar />
        <MobileTopNavBar leftIcon="arrow left big" leftIconFunction="back" >购物车</MobileTopNavBar>
        <br/>

        <CartList
        onItemCheckChange={index => this.onItemCheckChange(index)}
        cartItems={this.props.cartItems}
        />

        <p>&nbsp;</p>

        <div style={{position: "fixed", bottom: "50px", zIndex: 300, padding: "10px", width: "100%", backgroundColor: "#FFFFFB", fontSize: "12px"}}>
          <div className="ui divider" style={{marginTop: "0px"}}></div>
          <div>
            <div className="ui radio checkbox" style={{position: "relative", top: "8px", float: "left", marginRight: "20px"}}
            onTouchTap={this.handleCheckInputChange.bind(this)}
            >
            <input type="radio" name="radio"  onChange={this.handleCheckInputChange.bind(this)}
            ref="checkbox"
            />
            <label style={{fontSize: "11px"}}>全选</label>
            </div>
            <div style={{position: "relative", top: "8px", float: "left"}}>合计：<i className="yen icon"></i><span id="cart-total-price">{this.props.cartItems}</span></div>
            <a style={{float: "right" }} onTouchTap={() => dispatch(cartChectOut())} className="ui red button">立即结算</a>
            {/*<a className="ui blue button" onTouchTap={this.addItem.bind(this)}>增加</a>*/}
          </div>

        </div>
      </div>
    );
  }
}
function select(state) {
  return {
    cartItems: state.cartItems,
    cartCost: state.cartCost
  };
}

export default connect(select)(Cart);
