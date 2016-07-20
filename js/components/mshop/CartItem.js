'use strict';

import React from 'react';

let CartItemIndex = 0

class CartItem extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
  }

  handleNumberChange(event) {
    this.props.quantityChange({quantity: event.target.value, index: this.props.index});
  }

  render() {
    let numberBtnStyle = {
      paddingTop: '2px',
      paddingRight: '8px',
      paddingBottom: '6px',
      paddingLeft: '8px',
      fontSize: "20px",
      float: "left"
    };

    return (
      <li className="collection-item row">
      <form>
        <div className="col s2">
            <input
            style={{position: "relative", top: "7px"}}
            type="checkbox" id={"test"+this.props.dataKey}
            onClick={this.props.handleCheckChange}
            checked={this.props.checked ? true : false}
            onChange={()=>{}}
            />
            <label  style={{position: "relative", top: "7px"}} htmlFor={"test"+this.props.dataKey}>
            </label>
        </div>
        <div className="col s4">
        <img className="materialboxed"
        width="87" src={this.props.imageUrl}
        data-caption={this.props.children}
        /></div>
        <div className="col s6">
        {this.props.children.length > 15 ? this.props.children.slice(0,15)+"..." : this.props.children}
        <p>
        <span
        style={{fontSize: "12px", paddingLeft: "10px", paddingRight: "10px", fontWeight: "bolder", position: "relative", left: "1px", top: "7px"}}>

        {this.props.cost}元
        </span>
        <span onClick={this.props.removeCartItem}
         style={{fontSize: "12px", paddingLeft: "10px", paddingRight: "10px", width: "50px"}}  className="waves-effect waves-yellow btn secondary-content red small">删除</span>
        </p>
        <br/>
        <p>
        <span style={numberBtnStyle}
        className="waves-effect waves-red btn grey lighten-4 grey-text text-darken-4"
        onClick={this.props.minusQuantity}

        >
      <i className="material-icons" aria-hidden="true">exposure_neg_1</i>
        </span>
        <input  style={{float: "left", width: "42px", textAlign: "center"}} type="number"
           placeholder={this.props.quantity}
           onChange={this.handleNumberChange.bind(this)}
           onBlur={(event)=>{event.target.value='';}}
           min="1"
          length="5" maxLength="5" ref="numberChange"/>
        <span style={numberBtnStyle}
        className="waves-effect waves-red btn grey lighten-4 grey-text text-darken-4"
        onClick={this.props.plusQuantity}
        >
          <i className="material-icons" aria-hidden="true">exposure_plus_1</i>
        </span>
        </p>
        </div>
      </form>

      </li>
    );
  }
}

export { CartItem as default };
