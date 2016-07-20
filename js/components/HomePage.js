import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {changePageMenuActive} from "../actions/page";



class HomePage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, menuKeys} = this.props;
    dispatch(changePageMenuActive("home"));
  }

  render() {

    return (
      <div>
        <br/><br/>
        <h3>网站首页</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(HomePage);
