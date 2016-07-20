import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {changePageMenuActive} from "../actions/page";



class CompanyNews extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, menuKeys} = this.props;
    dispatch(changePageMenuActive("news"));
  }

  render() {
    return (
      <div>
        <br/><br/>
        <h3>公司动态</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(CompanyNews);
