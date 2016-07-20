'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import BottomNav from './BottomNav';
import ProductCardList from './ProductCardList';


import TopNav from "./TopNav";

import {getProducts,
  addProductToCart,
  product,
  generateNewOrderByFastAndPushPath} from "../../actions/home.js";



  function is_weixin(){
  var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
    	return true;
    	} else {
    	return false;
    }
  }




class Home extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    $("#nav-bottom-mobile li:eq(0)").find("i").css("color", "#d32f2f");
    $("#nav-bottom-mobile li:eq(0)").find("p").css("color", "#d32f2f");
    $("#nav-bottom-mobile li:eq(0)").addClass("active");
    $('.slider').slider({full_screen: true});


    if (is_weixin() == false) {
      $('.materialboxed').materialbox();
    }


  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
    $('.slider').slider({full_screen: true});

  }

  render() {
    const { dispatch,products, cartMassage} = this.props;
    let productsList = function(products){
      if (products.length==0) {
        return(
          <div>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

          </div>
          <p>载入中...</p>
          </div>
        );
      }

      return(
        <ProductCardList products={products}
        addProductToCart={index => dispatch(addProductToCart(index))}
        generateNewOrderByFastAndPushPath={index=>dispatch(generateNewOrderByFastAndPushPath(index))}

        />
      );

    };
    let productsSlider = function(products){
      $(document).ready(function(){
          $('.slider').slider({full_screen: true});
      });
      if (products.length==0) {
        $(document).ready(function(){
            $('.slider').slider({full_screen: true});
        });
        return(
          <div style={{textAlign: "center"}}>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

          </div>
          <p>载入中...</p>
          </div>
        );
      }else{
        $(document).ready(function(){
            $('.slider').slider({full_screen: true});
        });
        return(
          <div className="slider">
                <ul className="slides">
                  <li>
                    <img  src={products[0].imageUrl} />
                    <div className="caption center-align">
                      <h3>{products[0].title}</h3>
                      <h5 className="light grey-text text-lighten-3">{products[0].advanceSaying}</h5>
                      <a onClick={()=>dispatch(generateNewOrderByFastAndPushPath(0))} className="waves-effect waves-light grey darken-3 btn">立即购买</a>
                    </div>
                  </li>
                  <li>
                    <img  src={products[1].imageUrl} />
                    <div className="caption center-align">
                      <h3>{products[1].title}</h3>
                      <h5 className="light grey-text text-lighten-3">{products[1].advanceSaying}</h5>
                      <a onClick={()=>dispatch(generateNewOrderByFastAndPushPath(1))} className="waves-effect waves-light grey darken-3 btn">立即购买</a>
                    </div>
                  </li>
                </ul>
              </div>
        );
      }

      return "啥都不是";

    };
    return (
      <div id="appHome">
        <TopNav leftItem="" rightItem="">老马商城</TopNav>
            {productsSlider(this.props.products)}
            <div style={{textAlign: "center"}} >
            {productsList(this.props.products)}
            </div>
            <br/><br/>
            <div style={{textAlign: "center"}}>本应用不兼容UCweb浏览器</div>
            <br/><br/>
            <br/><br/>
            <BottomNav />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.HomeReducer.products

   };
}


export default connect(mapStateToProps)(Home);
