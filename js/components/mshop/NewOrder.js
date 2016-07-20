'use strict';

import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { goBack, push } from 'react-router-redux';
import { connect } from 'react-redux';
import {Link} from "react-router";
import BackNavIcon from './BackNavIcon';

class NewOrder extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  handlePayOrderBtn(event) {
      event.preventDefault();
      const { dispatch, currentOrder} = this.props;
      let contactInUse = this.props.currentOrder.contactInUse;
      if (contactInUse != null) {
          alert("转到微信支付");

          return
      }
      alert("请填写您的配送地址及联系方式");
      return

  }


  getCurrentPayment(payment) {
    switch (payment) {
      case "wechat":
        return (
          <li style={{textAlign: "center"}} className="collection-item row">
              <div className="col s6" style={{position: "relative", top: "20px", fontSize: "14pt"}}>支付方式：</div>
              <div className="col s6">
              <img width="100%" src="/images/wechat_pay.jpg" />
              </div>
          </li>
        );
        break;
      case "alipay":
        return "支付宝";
      default:
        return "微信支付";

    }

  }





  showProducts(products, dispatch) {
    if (products.length == 0) {
      dispatch(goBack());

    }
    let productsNode = products.map((product, index) => {
      return (
        <li key={index}   style={{width: "100%", overflowWrap: "break-word", wordWrap: "break-word", padding: "18px"}} className="collection-item row waves-effect waves-red grey lighten-5 small">
          <div className="col cs4"  style={{paddingTop: "5px"}}>
            <img style={{width: "60px"}} src={product.imageUrl} />
          </div>
          <div className="col cs8" style={{overflowWrap: "break-word", wordWrap: "break-word", width: "60%"}}>
            <p  style={{overflowWrap: "break-word", wordWrap: "break-word"}}>{product.title}</p>
            <p  style={{overflowWrap: "break-word", wordWrap: "break-word"}}>数量：×{product.quantity}</p>
            <p  style={{overflowWrap: "break-word", wordWrap: "break-word"}}>总价：¥{product.cost}</p>
          </div>

        </li>
      );

    });
    return productsNode;
  }
  contactInUse(contact, dispatch) {
    if (contact) {
      $("#payOrderBtn").removeClass("grey lighten-3");
      $("#payOrderBtn").addClass("red");
      $("#payOrderBtn").css("color", "white");
      return (
        <li  style={{width: "100%", overflowWrap: "break-word", wordWrap: "break-word"}} onClick={()=>dispatch(push("/user/contacts"))} className="collection-item row waves-effect waves-red grey lighten-5 small" >
          <div className="col s3" style={{overflowWrap: "break-word", wordWrap: "break-word"}}>
            <p>收货人姓名：<br/>{contact.name}</p>
          </div>
          <div className="col s5" style={{overflowWrap: "break-word", wordWrap: "break-word"}}>
            <p style={{fontSize: "12px"}}>手机： <br/>{contact.mobile}</p>
            <p style={{fontSize: "12px"}}>配送地址： <br/>{contact.address}</p>
          </div>
          <div className="col s1">
            <p>{contact.isDefault ? "默认" : <span>&nbsp;</span>}</p>
          </div>
          <div className="col s3">
            <p style={{float: "left", fontSize: "12px"}}>修改: <i className="medium material-icons" style={{fontSize: "3rem"}}>chevron_right</i></p>
          </div>
        </li>
      )
    }else{
      $("#payOrderBtn").removeClass("red");
      $("#payOrderBtn").addClass("grey lighten-3");
      $("#payOrderBtn").css("color", "grey");
      return (
        <li onClick={()=>dispatch(push("/user/contacts"))} className="collection-item row waves-effect waves-red grey lighten-5 small" style={{width: "100%"}}>
          <div className="col s9">
            <h5 className="header">添加配送联系地址</h5>
          </div>
          <div className="col s3" style={{textAlign: "right"}}>
            <i className="medium material-icons" style={{fontSize: "3rem"}}>chevron_right</i>
          </div>

        </li>
      );

    }//else
  }
  render() {
    const { dispatch, currentOrder} = this.props;
    let backIcon = function(){
      return (
        <BackNavIcon />
      );
    }
    return (
      <div>
      <TopNav
      leftClick={()=>dispatch(goBack())}
      leftItem={<BackNavIcon />}
        rightItem="">填写订单
        </TopNav>
        <ul className="collection">
          {this.contactInUse(this.props.currentOrder.contactInUse, dispatch)}
          {this.showProducts(this.props.currentOrder.products, dispatch)}
          {this.getCurrentPayment(this.props.currentOrder.payment)}
        </ul>
        <div className="row grey lighten-5"  style={{position: "fixed", zIndex: "899",padding: "2px", bottom: "41px", width: "100%"}}>
          <div className="col s4">
            商品数量： {this.props.currentOrder.products.length}
          </div>

          <div className="col s5">
              合计：{this.props.currentOrder.cost}
          </div>
          <div  className="col s3" style={{textAlign: "center"}}>
              <a id="payOrderBtn" onClick={this.handlePayOrderBtn.bind(this)}  style={{paddingLeft: "10px", paddingRight: "10px", color: "grey"}} className="waves-effect waves-yellow btn grey lighten-3 small">
                  结算
              </a>
          </div>
        </div>
        <BottomNav />
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOrder: state.orderStore.currentOrder
   };
}


export default connect(mapStateToProps)(NewOrder);
