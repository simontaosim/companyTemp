'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {getProducts} from "../../actions/home.js";

class Loader extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(push("/home"));
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
    $('.slider').slider({full_screen: true});

  }
  render() {
    return (
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
  }
}
function mapStateToProps(state) {
  return {
    products: state.HomeReducer.products

   };
}


export default connect(mapStateToProps)(Loader);
