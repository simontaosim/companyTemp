"use strict"

import React from "react";

class CartNumberCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {quantity: 1, cost: this.props.price};
  }



  handleNumberMinusBtn() {
  // -1
    if (this.state.quantity==1) {
        return false;
    }
    let quantity = this.state.quantity;
    quantity--;
    let price = this.props.price;

    this.setState({quantity: quantity, cost: price*quantity, price: price});
    this.props.onNumberChange({cost: price*quantity });

  }

  handleNumberPlusBtn() {
    //+1
    let quantity = this.state.quantity;
    quantity++;
    let price = this.props.price;

    this.setState({quantity: quantity, cost: price*quantity, price: price});
    this.props.onNumberChange({cost: price*quantity });

  }
  handleChange(event) {
    //自己填
    event.preventDefault();

    let price = this.state.price;
    let quantity = event.target.value;

    this.setState({quantity: quantity, cost: price*quantity, price: price});
    this.props.onNumberChange({cost: price*quantity });

  }
  componentDidMount() {
    let price = this.props.price;
    this.setState({quantity: 1, cost: this.props.price, price: price});
  }

  componentWillUnmount() {
    let price = this.props.price;
    this.setState({quantity: 1, cost: this.props.price, price: price});

  }

  render() {
    return (
      <div>
            <div style={{float: "left", position: "relative", textAlign: "center", padding: "4px", marginRight: "4px"}}>
            <i className="yen icon"></i>
             <span className="cart cost-item">{this.state.cost}</span>
            </div>
            <div className="ui action input">
                <button className="ui show button" style={{width: "30px", padding: "10px", paddingLeft: "16px", paddingTop: "8px", height:"28px"}}
                onTouchTap={this.handleNumberMinusBtn.bind(this)}
                >
                <i className="minus small icon"></i>
                </button>
                <input type="number" min="1" max="99999" value={this.state.quantity}
                style={{width: "30px", padding: "4px", height:"28px", fontSize: "12px"}}
                onChange={this.handleChange.bind(this)}
                ref="quantity"
                />
                <button className="ui hide button" style={{width: "30px", paddingLeft: "16px", paddingTop: "8px", height:"28px"}}
                onTouchTap={this.handleNumberPlusBtn.bind(this)}
                >
                <i className="plus small icon"></i>
                </button>
              </div>
      </div>
    );
  }
}

export {CartNumberCounter as default };
