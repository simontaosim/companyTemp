'use strict';

import React from 'react';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {getImages} from "../../actions/shop-admin/images.js";

class ImageAdminLoader extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(push("/images"));
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getImages(1));

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
    images: state.ImageReducer.images

   };
}


export default connect(mapStateToProps)(ImageAdminLoader);
