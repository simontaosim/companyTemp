'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {updateDealingProduct} from "../../actions/shop-admin/products.js";


class NewProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    // setInterval(() => this.getComments(), 5000);
  }

  componentDidMount() {
    $('.ui.selection.dropdown').dropdown();

    let product = this.props.newProduct
    this.refs.title.value = product.title;
    this.refs.priceInt.value = product.priceInt;
    this.refs.priceFloat.value = product.priceFloat;
    this.refs.storeNumber.value = product.storeNumber;
    this.refs.advanceSaying.value = product.advanceSaying;
    this.refs.briefDecription.value = product.briefDecription;

  }
  componentDidUpdate() {
      $('.ui.dropdown').dropdown('refresh');
  }

  handleCancelBtn(event){
    const {dispatch} = this.props;
    dispatch(push("products/loader"));
  }

  handleSubmit(event) {
    event.preventDefault();
    const {dispatch} = this.props;
    let productNew = {
      title: this.refs.title.value,
      priceInt: Number(this.refs.priceInt.value),
      priceFloat: Number(this.refs.priceFloat.value),
      price: Number(this.refs.priceInt.value)+Math.round(this.refs.priceFloat.value)/100,
      storeNumber: Number(this.refs.storeNumber.value),
      advanceSaying: this.refs.advanceSaying.value,
      briefDecription: this.refs.briefDecription.value,
      images: this.props.newProduct.images,
      cover: this.props.newProduct.cover
    };

    dispatch(updateDealingProduct(productNew));



  }

  handlePriceIntChange(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  handlePriceFloatChange(event){
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    if (event.target.value > 99) {
      event.target.value = 99;
    }
  }

  render() {
    return (
      <div>
      <h4>新货</h4>
      <div className="ui divider"></div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="ui form">
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
            <div className="column"><label>商品名称</label></div>
            <div className="column">
            <input type="text"
            ref="title"
            name="product_name"
            placeholder="商品名称"
            /></div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label>价格</label>
          <div className="ui four column grid" style={{textAlign: 'center' }}>
            <div className="column">

              <input onChange={this.handlePriceIntChange.bind(this)} ref="priceInt" min="0"  type="Number" name="product_price_front" placeholder="整数" />.
            </div>
            <div className="column">
              <input  onChange={this.handlePriceFloatChange.bind(this)} ref="priceFloat" min="0" max="99" type="Number" name="product_price_end" placeholder="小数" />
            </div>
            <div className="column">
              <div className="ui selection dropdown">
               <div className="default text"  data-value="yuan">人民币</div>
               <i className="dropdown icon"></i>
               <input type="hidden" name="price1" />
               <div className="menu">
                 <div className="item" data-value="yuan">人民币</div>
               </div>
              </div>
            </div>
            <div className="column">
              <span></span>
            </div>
          </div>

        </div>
        <div className="ui divider"></div>
        <div className="field">
          <div className="ui two column grid" style={{textAlign: 'center' }}>
            <div className="column"><label>库存</label></div>
            <div className="column"><input ref="storeNumber" type="number" name="prodution" placeholder="可以最多卖的数量"  /></div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label>详细信息</label>
          <textarea ref="advanceSaying" name="description" placeholder="产品详细介绍以及具有宣传性质的文案"></textarea>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label>简述</label>
          <textarea ref="briefDecription" rows="2" name="short_description" placeholder="一眼就能有印象的产品简介"></textarea>
        </div>
        <div className="ui divider"></div>
        <div className="ui three column grid" style={{textAlign: 'center' }}>
          <div className="column">
            <button onClick={this.handleCancelBtn.bind(this)} className="ui red cancel inverted button" type="button">取消</button>
          </div>
          <div className="column">
            ［步骤1］
          </div>
          <div className="column">
            <button className="ui green ok inverted button" type="submit">下一步</button>
          </div>
        </div>

      </div>
      </form>
      <br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    newProduct: state.ProductReducer.dealingProduct

   };
}


export default connect(mapStateToProps)(NewProduct);
