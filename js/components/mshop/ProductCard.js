'use strict';

import React from 'react';

function is_weixin(){
  //判断是否是微信浏览器
  var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true;
      } else {
      return false;
    }
}

class ProductCard extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }
  handleClick(event) {
    event.preventDefault();
    this.props.generateNewOrderByFastAndPushPath(event);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img className={!is_weixin() ? "materialboxed" : ""} data-caption={this.props.title} src={this.props.imageUrl} />
              <span className="card-title grey darken-3" style={{width: "100%", opacity: "0.7", margin: "2px"}}>
                <span style={{width: "100%", opacity: "1 !important"}}>{this.props.title}</span>
                <i className="medium material-icons" style={{fontSize: "3rem", float: "right"}}>chevron_right</i>
              </span>
            </div>
            <div className="card-content">
              <p>¥{this.props.price}({this.props.priceType})</p>
              <p>{this.props.briefDecription}<br/>
              <span style={{fontSize: "1rem", float: "right"}}>详情<i className="medium material-icons" style={{fontSize: "1rem", float: "right"}}>chevron_right</i></span>
              </p>
            </div>
            <div className="card-action">
              <button onClick={this.props.addProductToCart} style={{padding: "5px", marginRight: "10px", color: "red"}}
              className="btn waves-effect waves-light grey lighten-5">加入购物车</button>
              <button onClick={this.handleClick.bind(this)} style={{padding: "5px", marginLeft: "10px", color: "red"}}
               className="btn waves-effect waves-light grey lighten-5">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { ProductCard as default };
