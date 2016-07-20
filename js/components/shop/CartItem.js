'use strict';

import React from 'react';
import CartNumberCounter from './CartNumberCounter';

class CartItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {checked: true, cost: this.props.price, key: this.props.dataKey}
    // console.log(this.props.key);
  }

  componentDidMount() {
    this.refs.checkbox.checked = this.props.checked;

  }

  handleChange(event) {
      event.preventDefault();
      let checked =event.target.parentNode.getElementsByTagName('input')[0].checked;
      console.log(checked);
      checked = event.target.parentNode.getElementsByTagName('input')[0].checked = !checked;
      console.log(checked);
      let cost =  this.state.cost;
      let key = this.state.key;
      this.state.checked = checked;
      this.setState({checked: checked, cost: cost, key: key});
      let item = this.state
      console.log(this.state.checked);
      console.log(item.checked);
      this.props.onItemCheckChange({checked: checked, cost: cost, key: key, flag: "check"});


  }
  handleCheckBoxClick(event) {
      event.preventDefault();
      this.handleChange(event);
  }

  handleCheckInputClick(event){
    event.preventDefault();
    stopPropagation(event);
    event.stopPropagation();
    //以上是各种防止事件冒泡
    this.handleChange(event);
  }

  handleNumberChange(pay) {
    console.log(pay.cost);
    let checked = this.state.checked;
    let key = this.state.key;
    let cost = pay.cost;
    this.setState({checked: checked, cost: cost, key: key});
    this.props.onItemNumberChange({checked: checked, cost: cost, key: key, flag: "number"});
  }

  render() {
    return (
      <div  className="item ui grid cart-item" style={{clear: "both", WebkitBoxOrient: "vertical !important"}} >
        <div className="three wide center aligned column">
          <div className="ui left floated compact segment"
                onTouchTap={this.props.onItemCheckChange}
               style={{position: "relative", zIndex: "30"}}
          >
            <div className="ui fitted checkbox">
                <input type="checkbox" name=""
                onChange={this.props.onItemCheckChange}
                style={{zIndex: "-10"}}
                checked={this.props.checked ? true : false}
                ref="checkbox"
                />
                <label>&nbsp;</label>
            </div>
          </div>

            <br/>
        </div>
        <div className="four wide column">
          <img className="ui centered small image" src={this.props.imageUrl}/>
        </div>
        <div className="nine wide column">
            <p className="small" style={{fontSize: "12px"}}>
              {this.props.children}<br/>{this.props.key}
              <button className="ui red mini button" style={{float: "right", position: "relative", bottom: "2px"}}>删除</button>
            </p>
              <div style={{clear: "both"}}></div>
            <CartNumberCounter price={this.props.price} onNumberChange={this.handleNumberChange.bind(this)}/>
        </div>

      </div>
    );
  }
}

export { CartItem as default };
