'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {getProducts} from "../../actions/shop-admin/products.js";

class ProductAdminLoader extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(push("/products"));
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProducts(1));

  }
  render() {
    return (
      <div><br/><br/><br/><br/>
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui indeterminate text loader">数据加载中</div>
        </div>
        <p></p>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.ProductReducer.products

   };
}


export default connect(mapStateToProps)(ProductAdminLoader);
