"use strict"

import React from "react";
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import "./ProductCard.css"


class ProductCard extends React.Component {





  render() {
    return (
      <div className="card column productCard" style={{fontSize: "12px"}}>

        <div className="content">
          <img className="ui big image" src={this.props.imageUrl}/>
        <div className="description">
          <p>{this.props.children}</p>
          <div className="ui horizontal list">
            <div className="item" style={{textDecoration: "line-through", fontSize: "11px"}}>原价：<span style={{color: "#CB4042"}}>{this.props.price}</span></div>
            <div className="item" style={{color: "#CB4042", fontSize: "11px"}}>现价：<span >{this.props.discountPrice}</span></div>
          </div>
        </div>
        </div>
        <div className="extra content" style={{clear: "both"}}>
        <div className="ui two buttons">
          <div className="ui basic green button"
          style={{paddingTop: "17px", paddingLeft: "1px", paddingRight: "1px", fontSize: "12px"}}>
          加入购物车</div>
          <div className="ui basic red button"
          style={{paddingTop: "17px", paddingLeft: "1px", paddingRight: "1px", fontSize: "12px"}}>
          立即购买</div>
        </div>
        </div>
      </div>
    );
  }
}

export {ProductCard as default };
