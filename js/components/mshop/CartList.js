'use strict';

import React from 'react';
import CartItem from './CartItem';



class CartList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleQuantityChange(q) {
    this.props.handleQuantityChange(q)
  }

  render() {
    let cartItemNodes = this.props.cartItems.map((item, index) => {
      return (
        <CartItem
        key={index}
        index={index}
        dataKey={item.id}
        imageUrl={item.imageUrl}
        checked={item.checked}
        price={item.price}
        cost={item.cost}
        quantity={item.quantity}
        handleCheckChange={()=>this.props.handleCheckChange(index)}
        plusQuantity={()=>this.props.plusQuantity(index)}
        minusQuantity={()=>this.props.minusQuantity(index)}
        removeCartItem={()=>this.props.removeCartItem(index)}
        quantityChange={this.handleQuantityChange.bind(this)}
        >
          {item.title}
        </CartItem>
      );
    });
    return (
      <ul className="collection">
        {cartItemNodes}
      </ul>
    );
  }
}

export { CartList as default };
