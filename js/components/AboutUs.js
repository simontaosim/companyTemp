import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {changePageMenuActive} from "../actions/page";



class AboutUs extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, menuKeys} = this.props;
    dispatch(changePageMenuActive("about"));
  }

  render() {

    return (
      <div>
        <br/><br/>
        <h3>关于我们</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuKeys: state.page.menuKeys
   };
}

export default connect(mapStateToProps)(AboutUs);
