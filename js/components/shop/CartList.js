'use strict';

import React from 'react';

import CartItem from './CartItem';




class CartList extends React.Component {

  constructor(props) {
    super(props);
    let total_cost = 0.00
    let items = new Array();
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total_cost += this.props.cartItems[i].price;
      items[i] = {cost: this.props.cartItems[i].price, key: this.props.cartItems[i].id, checked: true}
    }
    this.state = {total_cost: total_cost,
      items: items, isAllSelected: 1
    };
    console.log(total_cost);
  }

  checkedAllSelected(items) {
    console.log(items);
    //1表示全选
    //2表示不全选
    //0表示全不选
    var state = 1;
    var allChecked = true; //全选
    var allUnChecked = false;//全不选


    for (var i = 0; i < items.length; i++) {

      allChecked = (allChecked && (items[i].checked));

      allUnChecked = (allUnChecked || (items[i].checked));


    }
    state = 2
    if (allChecked == true) {
      state = 1;
      console.log(state);
      return state;
    }
    if (allUnChecked == false) {
      state = 0;
      console.log(state);
      return state;

    }

    return state;
  }

  componentDidMount() {


    //添加分割线
    $("#cartList .row").each(function(){
        $(this).after('<div class="ui section divider"></div>');
    });

  }

  handleItemNumberChange(item) {
    console.log(item);
    if (item.checked) {
      this.changeTotalCost(item);
      return this.state.cost;

    }
  }


  handleItemChange (item){

    let total_cost = this.state.total_cost;
    let items = this.state.items;
    let isAllSelected = this.state.isAllSelected;

    if (item.flag == "check") {

      if (item.checked == true) {
        total_cost += item.cost;
      }
      if (item.checked == false) {
        total_cost -= item.cost;
      }

    }
      for (var i = 0; i < this.state.items.length; i++) {
        if(this.state.items[i].key == item.key){
          //寻找到相同的key，改变数据
            items[i].cost = item.cost
            items[i].checked = item.checked
            if (item.flag == "number" && item.checked == true) {
              total_cost -= this.state.items[i].cost;
              total_cost += item.cost;
            }
            console.log(item.checked);
            break;

        }
      }
      isAllSelected = this.checkedAllSelected(this.state.items);
      this.setState({total_cost: total_cost, items: items, isAllSelected: isAllSelected});
      this.props.onListChange({cost: total_cost, isAllSelected: isAllSelected});


  }



  render() {
    let cartItemNodes = this.props.cartItems.map((item, index) => {
      return (
        <CartItem key={index} price={item.price} dataKey={item.id} imageUrl={item.imageUrl}
        onItemNumberChange={this.handleItemChange.bind(this)}
        onItemCheckChange={() => this.props.onItemCheckChange(index)}
        checked={item.checked}
        >
          {item.title}
        </CartItem>
      );
    });
    return (
        <div className="ui relaxed divided list" id="cartList" style={{padding: "10px"}}>
          {cartItemNodes}<br/>
        </div>
    );
  }
}

export {CartList as default };
